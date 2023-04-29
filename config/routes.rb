Rails.application.routes.draw do
  root "blocks#index"

  resources :blogs, only: [:index, :show]
  resources :blocks, only: [:index, :create]
end
