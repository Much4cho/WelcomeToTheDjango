from django.shortcuts import render
from .models import Node
from django.http import HttpResponse

# # def index(request):
# #     nodes=Node.objects.all()
# #     my_dict = {'nodes': "nodes"}
# #     return render(request, 'index.html', context=my_dict)
# #
# def test(request):
#     my_dict = {'nodes': "nodes"}
#     return render(request, 'test.html', context=my_dict)