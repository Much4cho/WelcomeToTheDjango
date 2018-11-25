from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
import json
import re
from random import randint



def index(request):
    my_dict = {'insert_me': "Hello I am data hehe"}
    return render(request, 'templates/driver.html', context=my_dict)

@csrf_exempt
def send(request):
    body_unicode = request.body.decode('utf-8')

    pattern = r'start=(\d+)&end=(\d+)'
    r = re.compile(pattern)
    m = r.match(body_unicode)
    start=m.group(1)
    end=m.group(2)
    s= Node.objects.get(pk=start)
    e= Node.objects.get(pk=end)
    print(s)
    print(e)
    width=[4,5,6,2,3]
    height=[1,3,4,5,2]
    available=[true,false]
    weight=[11,10,9,8,15]

    return HttpResponse("lol")


