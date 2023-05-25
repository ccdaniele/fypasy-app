Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :project_tasks
      resources :project_tags
      resources :project_resources
      resources :projects
      resources :resource_tags
      resources :task_tags
      resources :task_resources
      resources :user_resources
      resources :user_tasks
      resources :user_projects
      resources :tags
      resources :resources
      resources :tasks
      resources :users
      get '/projects', to: 'projects#index'
      get '/tags', to: 'tags#index'
      get '/tags', to: 'tags#show'
      get '/users', to: 'users#index'
      post '/users', to: 'users#create'
      post '/newproject', to: 'projects#create'
      post '/tags', to: 'tags#create'
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      get '/current_user', to: 'auth#show'
      patch '/projects', to: 'projects#update'     
    end
  end
end



