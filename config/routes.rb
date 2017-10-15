Rails.application.routes.draw do
  root 'static_pages#index'
  resources :cereals, only: [:show, :index]
  namespace :api do
    namespace :v1 do
      resources :cereals, only: [:index]
    end

  end
end
