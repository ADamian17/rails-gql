# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    # Link message
    field :create_message, mutation: Mutations::CreateMessage
    # Link mutations
    field :delete_link, mutation: Mutations::DeleteLink
    field :create_link, mutation: Mutations::CreateLink
    # User mutations
    field :create_user, mutation: Mutations::CreateUser
    field :update_user, mutation: Mutations::UpdateUser
    # Auth mutations
    field :sign_in_user, mutation: Mutations::SignInUser
  end
end
