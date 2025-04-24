from django.shortcuts import render
from django.http import HttpResponse 
# Create your views here.

def index(request):
    return HttpResponse("<h1>Hello, world. You're at the websites index.</h1>")

def renderkardunga(request):
    return render(request, 'webind.html')