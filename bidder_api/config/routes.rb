Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :users
  resource :sessions, only:[:new,:destroy,:create]
  resources :auctions do
    resources :bids, only: [:create]
  end

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :auctions , only:[:create, :index, :show] do
        resources :bids, only: [:create]
      end
      resource :sessions, only: [:create, :destroy]
      resources :users, only: [:create] do
        get :current, on: :collection 
      end
    end
  end

end
