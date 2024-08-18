class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :username, :first_name, :avatar_url

  def avatar_url 
    if object.avatar.attached?
      variant = object.avatar.variant(resize_to_limit: [100, nil])
      rails_representation_url(variant, only_path: true)
    else
      ActionController::Base.helpers.asset_path('defaultavatar.png')
    end
  end




end