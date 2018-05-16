"""api.v1_urls URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# Contrib
from django.urls import path

# Custom
from projects.views import Collection, Assignment
from restaurant.views import Navigation
from . import views

urlpatterns = [
    path( 'projects/', Collection.as_view() ),
    path( 'verify/', views.verify, name='verify' ),
    path( 'project/<int:project_id>/', Assignment.as_view() ),
    path( 'restaurant/pages/', Navigation.as_view() ),
]
