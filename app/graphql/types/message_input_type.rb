# frozen_string_literal: true

module Types
  class MessageInputType < Types::BaseInputObject
    argument :body, String, required: false
  end
end
