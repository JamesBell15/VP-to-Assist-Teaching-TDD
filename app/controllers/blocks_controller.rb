class BlocksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    p params[:block]

    File.open("spec/services/testing_spec.rb", "w") { |f|
      f.write params[:block]
    }
  end

  def block_params
    params.require(:block)
  end
end


