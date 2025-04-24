from django.shortcuts import render
from django.http import HttpResponse
from ankit.xyz import faltu

# Create your views here.

def index(request):
    return render(request, 'index.html')

def about(request):
    return HttpResponse("<h1>About Us</h1><p>This is the about page.</p>")

def contact(request):
    return HttpResponse("<h1>Contact Us</h1><p>This is the contact page.</p>")
