class BlocksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    file, code = params[:block].split("__")

    spec_path = "spec/#{file}_spec.rb"

    if valid_file?(file)
      write_spec(spec_path, code)
      flash.now[:alert] = "Success check #{spec_path}"
    else
      flash.now[:alert] = "File not found"
    end

    respond_to do |format|
      format.js
      format.html
    end
  end

  def block_params
    params.require(:block)
  end

  private

  def valid_file?(path)
    unless path.nil?
      return File.file?('app/' + path + '.rb')
    end

    false
  end

  def write_spec(path, code)
    File.open(path, "w") { |f|
      f.write code
    }
  end
end
