from django.urls import path
from .views import index, about , contact
from ankit.xyz import faltu

urlpatterns = [
    path('', index, name='home'),
    path('about-my-compnay', about, name='about'),
    path('contact', contact, name='contact'),
    path('faltu', faltu, name='faltu'),
]