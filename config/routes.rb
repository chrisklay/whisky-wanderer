Rails.application.routes.draw do
  devise_for :users

  resources :regions, only: [:index, :show, :new, :create, :edit, :update, :destroy] do
    resources :comments, only: [:index, :new, :create]
  end


  namespace :api do
    namespace :v1 do
        resources :regions, only: [:index, :show] do
          resources :comments, only: [:create, :new, :index]
        end
    end
  end

  root 'homes#index'
end
