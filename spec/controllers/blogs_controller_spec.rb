require "rails_helper"

RSpec.describe BlogsController, type: :controller do
  describe "GET index" do
    it "assigns @blogs" do
      blog = Blog.create
      get :index
      expect(assigns(:blogs)).to eq([blog])
      expect(response).to have_http_status(:ok)
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
      expect(response).to have_http_status(:ok)
    end
  end
end