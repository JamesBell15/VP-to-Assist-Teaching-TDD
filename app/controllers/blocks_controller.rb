class BlocksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    p params[:block]
  end

  def block_params
    params.require(:block)
  end
end


