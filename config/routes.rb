Rails.application.routes.draw do
  root 'static_pages#index'
  resources :cereals, only: [:index]
  namespace :api do
    namespace :v1 do
      resources :cereals, only: [:index]
    end
  end

  get '*path', to: 'static_pages#index'
  # get '/cereals/', to: 'static_pages#index'
  # get '/cereals/:id', to: 'static_pages#index'
end
