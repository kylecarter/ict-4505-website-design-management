from django.db import models

# Create your models here.
class Tag( models.Model ):
    term = models.CharField( max_length=255, verbose_name=u"Term", help_text=u"The label that will be displayed for the tag" )
    description = models.TextField( blank=True, verbose_name=u"Description", help_text=u"Internal Use: help text to understand \
        what the tag is for." )

    def __str__( self ):
        return "{0}".format( self.term )


class File( models.Model ):
    file = models.CharField( max_length=255, verbose_name=u"File", help_text=u"File name" )
    title = models.CharField( max_length=255, verbose_name=u"Title", help_text=u"Title to display on web pages")
    url = models.URLField( max_length=255, verbose_name=u"File URL", help_text=u"Relative or full URL to where the file is" )
    description = models.TextField( blank=True, verbose_name=u"Description", help_text=u"Internal Use: File description" )

    def __str__( self ):
        return "{0}".format( self.title )


class Project( models.Model ):
    title = models.CharField( max_length=255, verbose_name=u"Title", help_text=u"Title of the project" )
    description = models.TextField( blank=True, verbose_name=u"Description", help_text=u"A brief description of the project for \
        list pages." )
    body = models.TextField( blank=True, verbose_name=u"Body", help_text=u"Full HTML for the project to display on the project \
        web page." )
    files = models.ManyToManyField( File )
    tags = models.ManyToManyField( Tag )
    landing_page = models.BooleanField( default=False )

    def __str__( self ):
        return "{0}<{1}>".format( self.title, self.id )

    def display_tags(self):
        return ', '.join([ tags.term for tag in self.tags.all() ])

    def display_files(self):
        return ', '.join([ files.title for file in self.files.all() ])
