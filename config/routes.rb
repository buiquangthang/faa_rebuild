Rails.application.routes.draw do
  devise_for :admins, controllers: {sessions: "sessions"}
  root "home#index"
  get "tags/:tag", to: "news#index", as: :tag

  namespace :v1 do
    resources :certifications
    resources :news_categories
    resources :feedbacks, only: [:index, :destroy]
    resources :courses
    resources :course_categories
    resources :users
    resources :newses
    resources :registration_courses
  end

  namespace :admin do
    get "(*all)", to: "certifications#index"
  end

  resources :courses, only: [:index, :show]
  resources :feedbacks, only: [:new, :create]
  resources :trainers, only: [:show, :index]
  resources :registrations, only: [:new, :create]
  resources :news, only: [:index, :show]

  devise_scope :admin do
    get "/sign_up" => "devise/registrations#new", as: "new_user_registration"
  end
end
