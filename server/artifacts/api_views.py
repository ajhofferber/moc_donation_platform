from .models import ( Artifact )
from rest_framework import viewsets

class SelectedArtifactsViewSet(viewsets.ModelViewSet):
    querySet= Artifact.objects.all()
    # serializer_class = ArtifactSerializer
