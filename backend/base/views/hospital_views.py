from django.http import JsonResponse
import requests
from rest_framework.decorators import api_view
from geopy.geocoders import Nominatim
import os   
""
def get_lat_long(address):
  """
  This function takes a string address as input and returns a dictionary containing latitude and longitude.

  Args:
      address: A string representing the address to geocode.

  Returns:
      A dictionary with keys 'latitude' and 'longitude' containing the corresponding values, 
      or None if geocoding fails.
  """
  try:
    geolocator = Nominatim(user_agent="your_app_name")
    location = geolocator.geocode(address)

    if location:
      return location.latitude, location.longitude
    else:
      return None
  except Exception as e:
    print(f"Error geocoding address: {e}")
    return None

# (replace 'YOUR_API_KEY' with your actual key)

@api_view(['POST'])
def hospital(request):
    address = request.data['address']   
    URL = "https://discover.search.hereapi.com/v1/discover"
    api_key = 'APIKEY'  # Acquire from developer.here.com
    query = 'hospital'
    limit = 5
    latitude, longitude = get_lat_long(address)
    PARAMS = {
        'apikey': api_key,
        'q': query,
        'limit': limit,
        'at': '{},{}'.format(latitude, longitude)
    }

    # Sending get request and saving the response as response object
    r = requests.get(url=URL, params=PARAMS)
    data = r.json()

    hospitals = []
    for item in data['items']:
        hospitals.append({
            'name': item['title'],
            'address': item['address']['label'],
            'latitude': item['position']['lat'],
            'longitude': item['position']['lng']
        })

    return JsonResponse({'hospitals': hospitals})
