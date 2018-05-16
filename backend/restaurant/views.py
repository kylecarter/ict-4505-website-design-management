from django.shortcuts import render, get_object_or_404
from django.views.generic import View
from django.http import JsonResponse

# Create your views here.
class Navigation( View ):

    def get( self, request, *args, **kwargs ):
        nav = [
            {
                'id': 'about',
                'title': 'About'
            },
            {
                'id': 'menu',
                'title': 'Menu'
            },
            {
                'id': 'catering',
                'title': 'Catering'
            },
            {
                'id': 'contact',
                'title': 'Contact'
            },
            {
                'id': 'locations',
                'title': 'Locations'
            },
            {
                'id': 'specials',
                'title': 'Specials'
            }
        ]

        return JsonResponse( { 'navigation': nav } )
