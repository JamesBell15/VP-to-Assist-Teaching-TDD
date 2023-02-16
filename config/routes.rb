Rails.application.routes.draw do
  root "blogs#index"

  resources :blogs, only: [:index, :show]
  resources :blocks, only: :create

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
