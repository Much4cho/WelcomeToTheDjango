from django.conf.urls import url
from . import views
from django.contrib.auth import views as auth_views


urlpatterns=[
    url(r'^$',views.index,name='index'),
    url(r'^send/$', views.send, name='send'),
    url(r'^search/$', views.search, name='search'),
    url(r'^search2/$', views.search2, name='search2'),
]