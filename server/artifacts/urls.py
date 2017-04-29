from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    url(r'^selected_artifacts/$', views.artifact_list, name="selected_artifacts"),
]

urlpatterns = format_suffix_patterns(urlpatterns)
