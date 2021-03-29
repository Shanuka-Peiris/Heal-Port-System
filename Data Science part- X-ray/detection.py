from keras.models import load_model
from keras.preprocessing import image
import numpy as np
import matplotlib.pyplot as plt

#Declare img by loading an image
img = image.load_img("/content/drive/MyDrive/Datasets/val/NORMAL/NORMAL2-IM-1442-0001.jpeg",target_size=(224,224))
#Pre-process the image
img = np.asarray(img)
plt.imshow(img)
img = np.expand_dims(img, axis=0)

#Load the saved model
saved_model = load_model("modelSave.h5")
#Check the condition and print the output
output = saved_model.predict(img)
if output[0][0] > output[0][1]:
    print("NORMAL")
else:
    print("PNEUMONIA")