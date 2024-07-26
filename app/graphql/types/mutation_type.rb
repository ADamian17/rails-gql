# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_message, mutation: Mutations::CreateMessage
    field :delete_link, mutation: Mutations::DeleteLink
    field :create_link, mutation: Mutations::CreateLink
  end
end
