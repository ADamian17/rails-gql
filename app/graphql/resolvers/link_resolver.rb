# frozen_string_literal: true

module Resolvers
  class LinkResolver < Resolvers::BaseResolver
    type [Types::LinkType], null: false

    def resolve
      Link.all
    end
  end
end
