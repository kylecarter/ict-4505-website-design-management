from django.contrib import admin
from .models import Page

# Register your models here.
# Register your models here.
class PageAdmin( admin.ModelAdmin ):
    list_display = [ 'id', 'title' ]


admin.site.register( Page, PageAdmin )
