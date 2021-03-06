Rails.application.routes.draw do
  namespace :admin do
    resources :projects
    resources :users
    resources :sessions, only: [:create]

    get 'login', to: 'sessions#new', as: 'login'
    get 'logout', to: 'sessions#destroy', as: 'logout'
    get 'dashboard', to: 'dashboard#show', as: 'dashboard'
    root to: 'sessions#new'
  end

  resources :projects, only: [:index, :show]

  get '/home' => 'pages#home', as: :home
  get '/about' => 'pages#about', as: :about
  get '/services' => 'pages#services', as: :services
  get '/quote' => 'contact_requests#new', as: :quote_request
  post '/quote' => 'contact_requests#create', as: :create_quote_request
  get '/confirm_invite/:token' => 'invites#confirm_invite', as: :confirm_invite
  post '/confirm_invite/:token' => 'invites#process_invite', as: :process_invite

  root 'pages#home'
end
