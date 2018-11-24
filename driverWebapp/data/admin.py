from django.contrib import admin

from .models import *

@admin.register(Node)
class NodeAdmin(admin.ModelAdmin):
    pass
    # list_display = ('id', 'first_player', 'second_player', 'status')
    # list_editable = ('status',)


@admin.register(Edge)
class EdgeAdmin(admin.ModelAdmin):
    pass
    # list_display = ('id', 'first_player', 'second_player', 'status')
    # list_editable = ('status',)

