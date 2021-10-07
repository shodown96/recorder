from django.db import models

class Music(models.Model):
    name = models.CharField(max_length=100)
    audio = models.FileField()