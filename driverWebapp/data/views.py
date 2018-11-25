from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt



def index(request):
    my_dict = {'insert_me': "Hello I am data hehe"}
    return render(request, 'templates/driver.html', context=my_dict)

@csrf_exempt
def send(request):
    start = request.POST.get('start')   # end = request.POST.get('end',None)
    print(request.POST)
    print("KUPA")
    print(start)
    #print(start)
    #s= Node.objects.get(pk=start)
    #e= Node.objects.get(pk=end)
    return HttpResponse("lol")
