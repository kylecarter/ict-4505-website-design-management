from django.db import models

# Create your models here.
class Page( models.Model ):
    title = models.CharField( unique=True, max_length=255, verbose_name=u"Title", help_text=u"Title of the page" )
    description = models.TextField( blank=True, verbose_name=u"Description", help_text=u"A brief description of the page for SEO." )
    body = models.TextField( blank=True, verbose_name=u"Body", help_text=u"Full HTML for the page." )
    slug = models.SlugField( unique=True, max_length=255, verbose_name=u'Slug', help_text=u"SEO friendly URL." )

    def __str__( self ):
        return "{0}<{1}>".format( self.title, self.id )
