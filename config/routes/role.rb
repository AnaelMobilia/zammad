# Copyright (C) 2012-2024 Zammad Foundation, https://zammad-foundation.org/

Zammad::Application.routes.draw do
  api_path = Rails.configuration.api_path

  # roles
  match api_path + '/roles',            to: 'roles#index',   via: :get
  match api_path + '/roles/search',     to: 'roles#search',  via: %i[get post]
  match api_path + '/roles/:id',        to: 'roles#show',    via: :get
  match api_path + '/roles',            to: 'roles#create',  via: :post
  match api_path + '/roles/:id',        to: 'roles#update',  via: :put

end
