from django.db import models

# Create your models here.
class Tags( models.Model ):
    term = models.CharField( max_length=255 )
    description = models.TextField( blank=True )


class Project( models.Model ):
    title = models.CharField( max_length=255 )
    description = models.TextField( blank=True )
    url = models.URLField( max_length=255 )
    tags = models.ManyToManyField( Tags )
