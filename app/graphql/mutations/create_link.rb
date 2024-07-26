# frozen_string_literal: true

module Mutations
  class CreateLink < BaseMutation
    description "Creates a new link"
    type Types::LinkType

    input_object_class Types::LinkInputType

    def resolve(url: nil, description: nil)
      ::Link.create!(url: url, description: description, user: context[:current_user])

    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
