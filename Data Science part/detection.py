from keras.models import load_model
from keras.preprocessing import image
import numpy as np
import matplotlib.pyplot as plt


img = image.load_img("/content/drive/MyDrive/Datasets/val/NORMAL/NORMAL2-IM-1442-0001.jpeg",target_size=(224,224))
img = np.asarray(img)
plt.imshow(img)
img = np.expand_dims(img, axis=0)


saved_model = load_model("modelSave.h5")
output = saved_model.predict(img)
if output[0][0] > output[0][1]:
    print("NORMAL")
else:
    print("PNEUMONIA")