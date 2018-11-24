from django.contrib import admin

from .models import *

@admin.register(Node)
class NodeAdmin(admin.ModelAdmin):
    pass
    list_display = ('id', 'X', 'Y')
    # list_editable = ('status',)


@admin.register(Edge)
class EdgeAdmin(admin.ModelAdmin):
    pass
    list_display = ('id', 'StartingNode', 'EndingNode', 'IsClosed')
    # list_editable = ('status',)

