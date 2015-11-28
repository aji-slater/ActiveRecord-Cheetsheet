require_relative "../helpers/hashes"

get '/' do
  @hash = Hashy_hash
  p @hash
  erb :index
end
