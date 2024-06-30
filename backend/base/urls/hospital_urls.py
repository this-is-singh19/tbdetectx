from django.urls import path
from base.views import hospital_views as views

urlpatterns = [
    path('', views.hospital, name='hospital'),
]