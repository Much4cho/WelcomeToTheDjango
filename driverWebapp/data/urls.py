from django.conf.urls import url
from . import views
from django.contrib.auth import views as auth_views


urlpatterns=[
    url(r'^$',views.index,name='index'),
    url(r'^send/$', views.send, name='send'),
    url(r'^take/$', views.take, name='take'),

]