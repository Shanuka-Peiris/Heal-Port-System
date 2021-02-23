import warnings
warnings.filterwarnings("ignore")

import keras
from keras.models import Model
from keras.layers import Dense
from keras import optimizers
from keras.preprocessing import image
from keras.preprocessing.image import ImageDataGenerator
from keras.applications.vgg16 import VGG16
from keras.callbacks import ModelCheckpoint, EarlyStopping
from glob import glob
import matplotlib.pyplot as plt


training_dataset = "/content/drive/MyDrive/Datasets/train"
testing_dataset = "/content/drive/MyDrive/Datasets/test"
training_folders = glob("/content/drive/MyDrive/Datasets/train/*")

x_ray_width = 224
x_ray_height = 224


training_augmentation = ImageDataGenerator(
                                  rescale = 1./255,
                                  fill_mode = "nearest",
                                  shear_range = 0.2,
                                  zoom_range = 0.2,
                                  horizontal_flip = True
                                  )

testing_augmentation = ImageDataGenerator(
                                    rescale = 1./255,
                                    fill_mode = "nearest"
                                    )


train_datagen = training_augmentation.flow_from_directory(
                                                training_dataset,
                                                target_size = (x_ray_width, x_ray_height),
                                                batch_size = 27,
                                                class_mode = "categorical"
                                                )

test_datagen = testing_augmentation.flow_from_directory(
                                            testing_dataset,
                                            target_size =  (x_ray_width, x_ray_height),
                                            batch_size = 27,
                                            class_mode = "categorical"
                                            )


vgg_network = VGG16(input_shape = (x_ray_width, x_ray_height, 3), weights = "imagenet", include_top = True)

vgg_network.summary()

for layers in (vgg_network.layers)[:19]:
        print(layers)
        layers.trainable = False


X= vgg_network.layers[-2].output
prediction = Dense(len(training_folders), activation = "softmax")(X)
vgg_network_final = Model(inputs = vgg_network.input, outputs = prediction)

vgg_network_final.compile(
        loss = "categorical_crossentropy", 
        optimizer = optimizers.SGD(lr = 0.0001, momentum = 0.9), 
        metrics = ["accuracy"]
        )

vgg_network_final.summary()


model_check = ModelCheckpoint(
        "modelSave.h5", 
        monitor = "val_accuracy", 
        verbose = 1, 
        save_best_only = True, 
        save_weights_only = False, 
        mode = "auto", 
        period = 1
        )

previous = EarlyStopping(
        monitor = "val_accuracy", 
        min_delta = 0, 
        patience = 20, 
        verbose = 1, 
        mode = "auto"
        )

final_model = vgg_network_final.fit_generator(
        generator = train_datagen, 
        steps_per_epoch = len(train_datagen), 
        epochs = 500, 
        validation_data = test_datagen, 
        validation_steps = len(test_datagen), 
        callbacks = [model_check, previous]
        )

vgg_network_final.save("modelSave.h5")


plt.plot(final_model.history["accuracy"])
plt.plot(final_model.history["val_accuracy"])
plt.plot(final_model.history["loss"])
plt.plot(final_model.history["val_loss"])
plt.title("Accuracy of the Trained Model")
plt.ylabel("Accuracy")
plt.xlabel("Epoch")
plt.legend(["Accuracy","Validation Accuracy","loss","Validation Loss"])
plt.savefig("model.png")
plt.savefig("model.pdf")

