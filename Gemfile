source "https://rubygems.org"
source "https://rails-assets.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "bootstrap-sass"
gem "coffee-rails", "~> 4.2"
gem "ffaker"
gem "font-awesome-rails"
gem "jquery-turbolinks"
gem "jquery-rails"
gem "jbuilder", "~> 2.5"
gem "pg", "~> 0.20.0"
gem "puma", "~> 3.0"
gem "rails", "~> 5.0.3"
gem "react_on_rails"
gem "responders"
gem "sass-rails", "~> 5.0"
gem "versionist"
gem "turbolinks", "~> 5"
gem "uglifier", ">= 1.3.0"
gem "config"
gem "kaminari"
gem "simple_form"
gem "foreman"
gem "redcarpet"
gem "acts-as-taggable-on"
gem "faker"
gem "devise"
gem "figaro"
gem "delayed_job_active_record"
gem "rails_select_on_includes"

group :development, :test do
  gem "byebug", platform: :mri
  gem "pry-rails"
  gem "pry"
end

group :development do
  gem "web-console", ">= 3.3.0"
  gem "listen", "~> 3.0.5"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem "mini_racer", platforms: :ruby
gem "webpacker_lite"
