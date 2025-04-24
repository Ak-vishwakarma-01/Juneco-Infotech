from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.index, name='index'),  
    path('staticfile/', include('staticfile.urls')),
    path('inheritance/', include('inheritance.urls')),
]
