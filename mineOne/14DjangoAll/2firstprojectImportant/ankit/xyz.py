from django.http import HttpResponse
def faltu(request):
    return HttpResponse("<h1>Faltu</h1><p>This is the faltu page.</p>")