# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

user = User.create(name: "john doe",  email: "johndoe@example.com", password: "12345678")

[
  {
    url: 'http://graphql.org/',
    description: 'The Best Query Language',
    user_id: user.id
  },
  {
   url: 'http://dev.apollodata.com/',
   description: 'Awesome GraphQL Client',
   user_id: user.id
  }
].each do |link|
  Link.find_or_create_by!(link.to_h)
end

[
  {
    body: 'asere que bola',
    user_id: user.id
  },
  {
    body: 'cono esta todo',
    user_id: user.id
  },
].each do |message|
  Message.find_or_create_by!(message.to_h)
end
