# frozen_string_literal: true

module Types
  class LinkType < Types::BaseObject
    field :id, ID, null: false
    field :url, String
    field :description, String
    field :posted_by, Types::UserType, null: true, method: :user
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
