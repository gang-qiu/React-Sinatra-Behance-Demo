require 'sinatra'
require 'json'
require 'net/http'
require 'yaml'
require './mock'

config = YAML::load(File.open('./config.yaml'))
CLIENT_ID = config['BEHANCE_API_KEY']

get '/' do
  send_file File.expand_path('index.html', settings.public_folder)
end

# Fetch for list of users matching a username
get '/api/user/:name/search' do |name|
  content_type :json
  behance_url = "https://api.behance.net/v2/users/?q=#{name}&client_id=#{CLIENT_ID}"
  # res = Net::HTTP.get_response(URI(behance_url))
  # _handleResponse(res)
  Mock::USER_QUERY.to_json
end

# Fetch work experience
get '/api/user/:name/work_experience' do |name|
  content_type :json
  # behance_url = "https://api.behance.net/v2/users/#{name}/work_experience?client_id=#{CLIENT_ID}"
  behance_url = "https://www.behance.net/v2/users/#{name}/work_experience?client_id=#{CLIENT_ID}"
  # res = Net::HTTP.get_response(URI(behance_url))
  # _handleResponse(res)
  Mock::WORK_EXPERIENCE.to_json
end

# Fetch projects for one user
get '/api/user/:name/projects' do |name|
  content_type :json
  behance_url = "https://api.behance.net/v2/users/#{name}/projects?client_id=#{CLIENT_ID}"
  # res = Net::HTTP.get_response(URI(behance_url))
  # _handleResponse(res)
  Mock::PROJECTS.to_json
end

# Fetch followers for one user
get '/api/user/:name/followers' do |name|
  content_type :json
  behance_url = "https://api.behance.net/v2/users/#{name}/followers?client_id=#{CLIENT_ID}"
  res = Net::HTTP.get_response(URI(behance_url))
  _handleResponse(res)
end

# Fetch following users for one user
get '/api/user/:name/following' do |name|
  content_type :json
  behance_url = "https://api.behance.net/v2/users/#{name}/following?client_id=#{CLIENT_ID}"
  # res = Net::HTTP.get_response(URI(behance_url))
  # _handleResponse(res)
  Mock::FOLLOWING.to_json
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