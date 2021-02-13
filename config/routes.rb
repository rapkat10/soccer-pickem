Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users
  root 'home#index'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show]
    resources :teams, only: [:index, :show]
    resources :matches, only: [:index, :show] do
      collection do
        get 'create_new_tournament', to: 'matches#create_new_tournament', as: 'create_new_tournament'
        get 'play_matches', to: 'matches#play_matches', as: 'play_matches'
      end
    end
    resources :picks, only: [:index, :show, :create, :update]
  end
  
  get '*path', to: 'home#index'
end