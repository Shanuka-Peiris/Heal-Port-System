from flask import Flask, request
from werkzeug.utils import secure_filename
from keras.models import load_model
from keras.preprocessing import image
import numpy as np
import matplotlib.pyplot as plt
import json

#Create the Flask application object
application = Flask(__name__)
#Start the debugger
application.config["DEBUG"] = True


	
@application.route("/api/v1/resources/x-ray/image", methods = ["GET", "POST"])
def upload_file():
	if request.method == "POST":

		# data = request.get_json()
		# location = str(data["location"])
		# print(location)

		# # Declare temp_img using POST request file
		# temp_img = request.files["file"]
		# # Save the image as jpeg
		# temp_img.save(secure_filename("temp_image.jpeg"))
		# 
		# locationData = request.get_json(); 
		
		# location = locationData['Location']

		#Declare img by loading an image
		# img = image.load_img(location, target_size=(224,224)) 

		locationData = request.get_json(); 
		
		location = locationData['Location']

		#Declare img by loading an image
		img = image.load_img('../Backend-Heal-port-System/out.jpeg', target_size=(224,224))
		#Pre-process the image
		img = np.asarray(img)
		plt.imshow(img)
		img = np.expand_dims(img, axis=0)

		#Load the saved model
		saved_model = load_model("modelSave.h5")
		#Check the condition and print the output
		output = saved_model.predict(img)
		if output[0][0] > output[0][1]:
			return "NORMAL"
		else:
			return "PNEUMONIA"

	# if request.method == "POST":
	# 	#Declare temp_img using POST request file
	# 	temp_img = request.files["file"]
	# 	#Save the image as jpeg
	# 	temp_img.save(secure_filename("temp_image.jpeg"))  
		
	# 	#Declare img by loading an image
	# 	img = image.load_img("temp_image.jpeg",target_size=(224,224))
	# 	#Pre-process the image
	# 	img = np.asarray(img)
	# 	plt.imshow(img)
	# 	img = np.expand_dims(img, axis=0)

	# 	#Load the saved model
	# 	saved_model = load_model("modelSave.h5")
	# 	#Check the condition and print the output
	# 	output = saved_model.predict(img)
	# 	if output[0][0] > output[0][1]:
	# 		return "NORMAL"
	# 	else:
	# 		return "PNEUMONIA"
	  	
#Method to run the application
if __name__ == '__main__':
	application.run(port=8080)
