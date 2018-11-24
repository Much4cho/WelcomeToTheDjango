from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    my_dict = {'insert_me':"Hello I am Marynia hehe"}
    return render(request, 'templates/index.html', context=my_dict)
