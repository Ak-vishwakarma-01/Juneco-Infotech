from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("<h1>Hello, world. You're at the blog index.</h1>")

def about(request):
    return HttpResponse("<h1>About Us</h1><p>the about page of blog.</p>")