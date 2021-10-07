from django.urls import path
from .views import MusicCreateListView
urlpatterns = [
    path("", MusicCreateListView.as_view())
]