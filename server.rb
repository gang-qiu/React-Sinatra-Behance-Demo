require 'sinatra'
require 'json'
require 'net/http'
require 'yaml'

config = YAML::load(File.open('./config.yaml'))
puts config

get '/' do
  send_file File.expand_path('index.html', settings.public_folder)
end

# Fetch info for one user
get '/api/user/:name' do |name|
  content_type :json
  client_id = "#{config['BEHANCE_API_KEY']}"
  behance_url = "https://api.behance.net/v2/users/#{name}?client_id=#{client_id}"
  res = Net::HTTP.get_response(URI(behance_url))
  _handleResponse(res)
end

# Fetch projects for one user
get '/api/user/:name/projects' do |name|
  content_type :json
  client_id = "#{config['BEHANCE_API_KEY']}"
  behance_url = "https://api.behance.net/v2/users/#{name}/projects?client_id=#{client_id}"
  res = Net::HTTP.get_response(URI(behance_url))
  _handleResponse(res)
end

def _handleResponse(response)
  # sleep(1.5)   # short delay to show loading states
  case response
    when Net::HTTPSuccess then
      JSON.parse(response.body).to_json
    when Net::HTTPNotFound then
      status 404
    else
      puts response.body
      status 400
  end
end