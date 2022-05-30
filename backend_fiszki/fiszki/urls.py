from django.urls import path, include
from django.views.generic import TemplateView


urlpatterns = [
    # path('', ReactView.as_view(), name="something"),
    path('api/', include(('fiszki.routers', 'fiszki'))),
]
