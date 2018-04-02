from django.contrib import admin
from .models import Project, File, Tag

# Register your models here.
class ProjectAdmin( admin.ModelAdmin ):
    list_display = [ 'id', 'title' ]
    filter_horizontal = [ 'files', 'tags' ]


class TagAdmin( admin.ModelAdmin ):
    list_display = [ 'id', 'term' ]


class FileAdmin( admin.ModelAdmin ):
    list_display = [ 'id', 'title' ]


admin.site.register( Project, ProjectAdmin )
admin.site.register( Tag, TagAdmin )
admin.site.register( File, FileAdmin )
