require 'sinatra'
require 'json'
require 'net/http'

get '/' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/api/user/:name/projects' do |name|
  content_type :json
  client_id = ""
  behance_url = "https://api.behance.net/v2/users/#{name}/projects?client_id=#{client_id}"
  res = Net::HTTP.get_response(URI(behance_url))
  case res
    when Net::HTTPSuccess then
      JSON.parse(res.body).to_json
    else
      status 400
  end
end

