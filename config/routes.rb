# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  namespace :api do
    namespace :v1 do
      get 'books/index'
      post 'books/create'
      get 'books/show'
      delete 'books/destroy'
    end
  end
end
