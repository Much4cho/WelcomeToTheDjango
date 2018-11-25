from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
import json
import re
import random
from .graph import Graph
from .route import DijkstraAlgorithm
from django.core import serializers

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
    available=[True,False,True,True,True,True,True,True,True,True,True,True]
    weight=[11,10,9,8,15]

    w=random.randint(0, 4)
    h = random.randint(0, 4)
    a = random.randint(0, 11)
    we = random.randint(0, 4)
    
    edges_repeated = Edge.objects.filter(StartingNode=s, EndingNode=e).exists()
    
    if not edges_repeated:
        edge = Edge.objects.create(
            StartingNode=s,
            EndingNode=e,
            IsClosed=available[a],
            Height=height[h],
            Width=width[w],
            Weight=weight[we],
        )
    else:
        return HttpResponse("repeat")


    return HttpResponse("good")


@csrf_exempt
def take(request):
    body_unicode = request.body.decode('utf-8')
    print("KUPA")
    print(body_unicode)
    pattern = r'start=(.*)&end=(.*)&height=(.*).*&weight=(.*)&width=(.*)&radius=(.*)'
    r = re.compile(pattern)
    m = r.match(body_unicode)
    start = m.group(1)
    end = m.group(2)
    height = m.group(3)
    weight = m.group(4)
    width = m.group(5)
    radius = m.group(6)
    s = Node.objects.get(pk=start)
    e = Node.objects.get(pk=end)
    nodes=list(Node.objects.all())
    edges=list(Edge.objects.filter(Height__gte=height,Width__gte=width,Weight__gte=weight,IsClosed=True))
    
    print(edges)
    graph=Graph(edges,nodes)
    #print(graph.edges)
    # print(graph.nodes)
    dijkstra=DijkstraAlgorithm(graph)
    path=dijkstra.findRoute(s,e)
    pathx = [str(p.id) for p in path]
    print(pathx)
    return HttpResponse(",".join(pathx))

@csrf_exempt
def search(request):
    body_unicode = request.body.decode('utf-8')


    objects = Car.objects.all()
    print(serializers.serialize('json', list(objects), fields=('Registration','Weight')))

    return HttpResponse(serializers.serialize('json', list(objects), fields=('Registration','Weight')))
 

@csrf_exempt
def search2(request):
    body_unicode = request.body.decode('utf-8')

    pattern = r'search=(.+)'
    r = re.compile(pattern)
    m = r.match(body_unicode)
    if(m):
        search = m.group(1)
        search = search.replace("+", " ")
        print(search)
        objects = Car.objects.filter(Registration=search)
        print(serializers.serialize('json', list(objects), fields=('Registration','Weight','Height','TurnAxis')))
        
        return HttpResponse(serializers.serialize('json', list(objects), fields=('Registration','Weight','Height','TurnAxis', 'Width')))
    
    return HttpResponse()