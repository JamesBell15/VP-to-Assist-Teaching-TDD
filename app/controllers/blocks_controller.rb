class BlocksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    path, code = params[:block].split("__")

    spec_path = "spec/#{path}_spec.rb"

    if valid_path?(spec_path)
      write_spec(spec_path)
    end
  end

  def block_params
    params.require(:block)
  end

  private

  def valid_path?(path)
    File.directory?(path)
  end

  def write_spec(path)
    File.open(spec_path, "w") { |f|
      f.write code
    }
  end
end
