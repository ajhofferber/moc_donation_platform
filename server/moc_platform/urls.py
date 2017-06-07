from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic.base import TemplateView
from rest_framework import routers
from artifacts import views

router = routers.DefaultRouter()
router.register(r'artifacts', views.ArtifactViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # url(r'^api/', include('artifacts.urls')),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
