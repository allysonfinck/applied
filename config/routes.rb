Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/applications', to: 'applications#index'
  get '/applications/:id', to: 'applications#show'
  post '/applications', to: 'applications#create'
  delete '/applications/:id', to: 'applications#delete'
  put '/applications/:id', to: 'applications#update'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

end
