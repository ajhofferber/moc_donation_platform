from django.contrib import admin

from .models import Artifact


class ArtifactAdmin(admin.ModelAdmin):
    list_display = ('name', 'id')


admin.site.register(Artifact, ArtifactAdmin)
