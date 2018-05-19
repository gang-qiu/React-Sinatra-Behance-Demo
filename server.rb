require 'sinatra'
require 'json'
require 'net/http'
require 'yaml'

config = YAML::load(File.open('./config.yaml'))
puts config

get '/' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/api/user/:name/projects' do |name|
  content_type :json
  client_id = "#{config['BEHANCE_API_KEY']}"
  behance_url = "https://api.behance.net/v2/users/#{name}/projects?client_id=#{client_id}"
  res = Net::HTTP.get_response(URI(behance_url))
  case res
    when Net::HTTPSuccess then
      JSON.parse(res.body).to_json
    when Net::HTTPNotFound then
      status 404
    else
      puts behance_url
      puts res.body
      status 400
  end
end

