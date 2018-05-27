from django.shortcuts import render, get_object_or_404
from django.views.generic import View
from django.http import JsonResponse

# Custom
from .models import Page as RestaurantPage

# Create your views here.
def get_page_slugs():
    pages = RestaurantPage.objects.all()
    nav = []

    for page in pages:

        nav.append({
            'slug': page.slug,
            'title': page.title
        })
    
    return nav

class Navigation( View ):
    model = RestaurantPage

    def get( self, request, *args, **kwargs ):
        return JsonResponse( { 'navigation': get_page_slugs() } )

class Page( View ):
    model = RestaurantPage

    def get( self, request, *args, **kwargs ):

        try:
            page = self.model.objects.get( slug=kwargs[ 'page_slug' ] )

            resp = {
                'id': page.id,
                'body': page.body,
                'slug': page.slug,
                'title': page.title,
                'description': page.description,
            }

            return JsonResponse( { 'page': resp, 'navigation': get_page_slugs() } )

        except RestaurantPage.DoesNotExist:
            return JsonResponse( { 'navigation': get_page_slugs() } )
