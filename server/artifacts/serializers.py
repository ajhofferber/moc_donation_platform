from rest_framework import serializer_class
from artifacts.models import Artifact, STATUS_CHOICES

class ArtifactSerializer(serializers.Serializer):
    class Meta:
        model = Artifact
        fields = (id, status, owner_name, owner_email, name, location, description,
        size, is_owned, is_in_posession, can_access_for_research, can_loan_temporarily,
        can_loan_permanent, materials, history, creation, acquisition, use, history2,
        significance, owner_history)

        def create(self, validated_data):
            return Artifact.objects.create(**validated_data)
