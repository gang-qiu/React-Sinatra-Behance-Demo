require 'sinatra'
require 'json'

get '/' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/user/:name' do |name|
  puts "Requested Params: #{name}!"
  {data: name}.to_json
end
