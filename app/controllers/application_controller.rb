class ApplicationController < ActionController::Base
  
  before_filter :set_locale

  def set_locale
      I18n.locale = params[:locale] || I18n.default_locale
      I18n.locale = params[:locale] || 'en'
  end

    def default_url_options()
    
    { :locale => I18n.locale }
     end

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

    protect_from_forgery
end
