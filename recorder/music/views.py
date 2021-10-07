from django.shortcuts import render
from music.models import Music
from music.serializers import MusicSerializer
import json, requests
from django.http import JsonResponse
from rest_framework.generics import ListCreateAPIView
# Create your views here.

class MusicCreateListView(ListCreateAPIView):
    serializer_class = MusicSerializer
    queryset = Music.objects.all()
    # permission_classes = []
