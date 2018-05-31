# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  namespace :api do
    namespace :v1 do
      resources :books
    end
  end
  match '*path', to: 'home#index', via: :get
end
