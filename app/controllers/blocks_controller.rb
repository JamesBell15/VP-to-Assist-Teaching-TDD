class BlocksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    file, code = params[:block].split("__")

    spec_path = "spec/#{file}_spec.rb"



    if valid_file?(spec_path)
      write_spec(spec_path, code)
    end
  end

  def block_params
    params.require(:block)
  end

  private

  def valid_file?(path)
    File.file?(path)
  end

  def write_spec(path, code)
    File.open(path, "w") { |f|
      f.write code
    }
  end
end
