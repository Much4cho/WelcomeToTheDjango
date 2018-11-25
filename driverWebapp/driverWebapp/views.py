from django.urls import reverse
from django.http import HttpResponseRedirect
from django.views.generic import TemplateView
from django.shortcuts import render
from data.models import Node
from  django.template import RequestContext

def index(request):
    nodes=Node.objects.all()
    my_dict = {'nodes': nodes}
    return render(request, 'index.html', context=my_dict)


def test(request):
    my_dict = {'nodes': "nodes"}
    return render(request, 'test.html', context=my_dict)


