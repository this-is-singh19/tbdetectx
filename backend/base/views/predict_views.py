from http.client import HTTPResponse
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import numpy as np
from PIL import Image
import tensorflow as tf
import keras

#replace path to saved model
model = keras.models.load_model('path')

@api_view(['POST'])
def predict(request):
    if request.method == 'POST':
        uploaded_image = request.FILES['image']
        if uploaded_image:
            image = Image.open(uploaded_image)
            image = image.resize((224, 224))  
            image = np.array(image)

            predictions = model.predict(np.expand_dims(image, axis=0))

            threshold = 0.5
            if predictions[0][0] >= threshold:
                result = "The patient does not have TB."
            elif predictions[0][1] >= threshold:
                result = "The patient has a different disease."
            else:
                result = "The patient has TB."
            return JsonResponse({'result': result})
        else:
            return JsonResponse({'error': 'No image file provided'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        # Return a response indicating bad request if conditions are not met
        return JsonResponse({'error': 'Bad request'}, status=status.HTTP_400_BAD_REQUEST)    
   