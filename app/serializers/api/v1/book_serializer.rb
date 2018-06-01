# frozen_string_literal: true

class Api::V1::BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :created, :author

  def author
    object.user.name
  end

  def created
    object.created_at.strftime('%d/%m/%Y')
  end
end
