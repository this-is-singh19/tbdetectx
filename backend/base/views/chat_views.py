from django.shortcuts import render, reverse
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect, JsonResponse
import google.generativeai as genai
from rest_framework.decorators import api_view
# Create your views here.
# add here to your generated API key
genai.configure(api_key="API_KEY")

@api_view(['POST'])
def chat(request):
    print(request.data)
    text = request.data["question"]
    model = genai.GenerativeModel("gemini-pro")
    chat = model.start_chat()
    try:
      response = chat.send_message(text)
      response_data = {"text": response.text,  # Assuming response.text contains relevant data
                        # Add other relevant data from response if needed
                       }
      return JsonResponse({"data": response_data})
    except Exception as e:  # Catch any exceptions from the genai library
      # Handle the error gracefully, like logging the error and returning an informative message
      print(f"Error during chat: {e}")
      return JsonResponse({"error": "An error occurred while processing your request."}, status=500)