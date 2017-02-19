from wagtail.contrib.modeladmin.options import (
    ModelAdmin, modeladmin_register)
from .models import Artifact


class ArtifactAdmin(ModelAdmin):
    model = Artifact
    menu_order = 200
    list_display = ('name',)
    list_filter = ()
    search_fields = ('name',)

modeladmin_register(ArtifactAdmin)
