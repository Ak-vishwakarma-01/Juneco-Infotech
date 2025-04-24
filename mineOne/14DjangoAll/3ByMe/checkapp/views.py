from django.shortcuts import render

# Create your views here.

def checkind(request):
    return render(request, 'checkind.html')