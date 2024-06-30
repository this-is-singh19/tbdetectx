from django.urls import path
from base.views import predict_views as views

urlpatterns = [
    path('', views.predict, name='predict'),
]