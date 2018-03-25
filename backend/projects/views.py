# Contrib
from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse

# Custom
from .models import Project

# Create your views here.
class Collection( View ):
    model = Project

    def get(self, request, *args, **kwargs):
        return JsonResponse( { 'projects': list( Project.objects.all().values_list() ) } )
