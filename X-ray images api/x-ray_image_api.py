import flask
from flask import request, render_template
from werkzeug.utils import secure_filename

application = flask.Flask(__name__)
application.config["DEBUG"] = True


	
@application.route("/api/v1/resources/x-ray/image", methods = ["GET", "POST"])
def upload_file():
	if request.method == "POST":
		temp_img = request.files["file"]
		temp_img.save(secure_filename("image.jpeg"))  
	  	

application.run()
