Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :project_tasks, :project_tags, :project_resources, :projects, :resource_tags, :task_tags, :task_resources, :user_resources, :user_tasks, :user_projects, :tags, :resources,:tasks,:users
      get '/projects', to: 'projects#index'
      get '/tags', to: 'tags#index'
      get '/tags', to: 'tags#show'
      get '/users', to: 'users#index'
      post '/newproject', to: 'projects#create'
      post '/tags', to: 'tags#create'
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      get '/current_user', to: 'auth#show'
      patch '/projects', to: 'projects#update'     
    end
  end
end



