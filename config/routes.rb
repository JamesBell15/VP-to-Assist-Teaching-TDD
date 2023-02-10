Rails.application.routes.draw do
  root "blogs#index"

  resources :blog, only: [:index, :show]
  resources :ruby, only: [:index, :show]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
