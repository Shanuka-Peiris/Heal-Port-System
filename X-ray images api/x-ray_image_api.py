import flask
from flask import request, render_template
from werkzeug.utils import secure_filename
from keras.models import load_model
from keras.preprocessing import image
import numpy as np
import matplotlib.pyplot as plt

application = flask.Flask(__name__)
application.config["DEBUG"] = True


	
@application.route("/api/v1/resources/x-ray/image", methods = ["GET", "POST"])
def upload_file():
	if request.method == "POST":
		temp_img = request.files["file"]
		temp_img.save(secure_filename("temp_image.jpeg"))  
		
		
		img = image.load_img("image.jpeg",target_size=(224,224))
		img = np.asarray(img)
		plt.imshow(img)
		img = np.expand_dims(img, axis=0)


		saved_model = load_model("modelSave.h5")
		output = saved_model.predict(img)
		if output[0][0] > output[0][1]:
			return "NORMAL"
		else:
			return "PNEUMONIA"
	  	

application.run()