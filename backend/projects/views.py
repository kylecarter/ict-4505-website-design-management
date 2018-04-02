# Contrib
from django.shortcuts import render, get_object_or_404
from django.views.generic import View
from django.http import JsonResponse

# Custom
from .models import Project, Tag, File

# Create your views here.
class Collection( View ):
    model = Project

    def get( self, request, *args, **kwargs ):
        projects = Project.objects.all()
        nav = []
        resp = []

        for project in projects:
            resp.append({
                'id': project.id,
                'body': project.body,
                'title': project.title,
                'description': project.description,
                'tags': list( project.tags.all().values() ),
                'files': list( project.files.all().values() ),
            })

            nav.append({
                'id': project.id,
                'title': project.title
            })

        return JsonResponse( { 'projects': resp, 'navigation': nav } )


class Assignment( View ):
    model = Project

    def get( self, request, *args, **kwargs ):
        projects = Project.objects.all()
        nav = []

        try:
            project = Project.objects.get( pk=kwargs[ 'project_id' ] )

            resp = {
                'id': project.id,
                'body': project.body,
                'title': project.title,
                'description': project.description,
                'tags': list( project.tags.all().values() ),
                'files': list( project.files.all().values() ),
            }


            for proj in projects:
                nav.append({
                    'id': proj.id,
                    'title': proj.title
                })

            return JsonResponse( { 'project': resp, 'navigation': nav } )

        except Project.DoesNotExist:
            for project in projects:
                nav.append({
                    'id': project.id,
                    'title': project.title
                })

            return JsonResponse( { 'navigation': nav } )
