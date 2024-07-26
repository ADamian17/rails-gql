# frozen_string_literal: true

module Mutations
  class DeleteLink < BaseMutation
    description "Deletes a link by ID"
    type Types::LinkType

    type Types::LinkType, null: false

    argument :id, ID, required: true

    def resolve(id:)
      ::Link.find(id).destroy!

    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
