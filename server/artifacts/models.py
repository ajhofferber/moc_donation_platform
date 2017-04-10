from django.db import models


class Artifact(models.Model):
    STATUS_CHOICES = (
        ('submitted', 'submitted'),
        ('approved', 'approved'),
        ('selected', 'selected'),
    )
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    owner_name = models.CharField(max_length=255)
    owner_email = models.EmailField()
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=500)
    description = models.TextField()
    size = models.CharField(max_length=255, blank=True)
    is_owned = models.NullBooleanField(blank=True)
    is_in_posession = models.NullBooleanField(blank=True)
    can_access_for_research = models.NullBooleanField(blank=True)
    can_loan_temporarily = models.NullBooleanField(blank=True)
    can_loan_permanent = models.NullBooleanField(blank=True)
    materials = models.TextField(blank=True)
    history = models.TextField(blank=True)
    creation = models.TextField(blank=True)
    acquisition = models.TextField(blank=True)
    use = models.TextField(blank=True)
    history2 = models.TextField(blank=True)  # ????
    significance = models.TextField()
    owner_history = models.TextField(blank=True)

    api_fields = [
        'owner_name',
        'name',
        'location',
        'description',
        'materials',
        'history'
    ]

    def __str__(self):
        return self.name
