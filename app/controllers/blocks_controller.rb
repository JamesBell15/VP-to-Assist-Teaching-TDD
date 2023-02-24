class BlocksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    file, code = params[:block].split("__")

    File.open("spec/" + file, "w") { |f|
      f.write code
    }
  end

  def block_params
    params.require(:block)
  end
end


