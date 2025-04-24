from django.urls import path , include
from . import views

urlpatterns =[
    path('',views.index,name='index'),
    path('webind/',views.renderkardunga,name='renderkardunga'),
    path('checkapp/',include('checkapp.urls')),
]
