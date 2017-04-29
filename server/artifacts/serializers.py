from rest_framework import serializers
from artifacts.models import Artifact

class ArtifactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artifact
        fields = '__all__'
