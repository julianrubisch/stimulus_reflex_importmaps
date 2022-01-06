Rails.application.routes.draw do
  resources :pages, only: :index
end
