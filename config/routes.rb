Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users
  root 'home#index'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show]
    resources :teams, only: [:index, :show]
  end
  
  get '*path', to: 'home#index'
  # get 'url1', action: :index, controller: 'home'
  # get 'url2', action: :index, controller: 'home'
  # get 'url3', action: :index, controller: 'home'
end
