from django.urls import reverse
from django.http import HttpResponseRedirect
from django.views.generic import TemplateView

class MainPage(TemplateView):
    template_name = 'index.html'

class DriverPage(TemplateView):
    template_name = 'driver.html'