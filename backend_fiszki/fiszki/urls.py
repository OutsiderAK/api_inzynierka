from django.urls import path, include
from django.views.generic import TemplateView
from fiszki import views

urlpatterns = [
    # path('', ReactView.as_view(), name="something"),
    path('api/', include(('fiszki.routers', 'fiszki'))),
    path('api/fiszki/', views.FishkaApi.as_view())
]
