from django.urls import path, include, re_path
from django.views.generic import TemplateView

from fiszki import views

urlpatterns = [
    # path('', ReactView.as_view(), name="something"),
    path('api/', include(('fiszki.routers', 'fiszki'))),
    # fiszki
    path('api/fiszki/', views.FishkaApi.as_view()),
    path('api/fiszki/<int:id>', views.SingleFishkaApi.as_view()),
    # artykuły
    path('api/article/', views.ArticleApi.as_view()),
    re_path(r'^api/article/(?P<string>[\w\-]+)/$', views.SingleArticleApi.as_view()),
    # quizy
    path('api/quiz/', views.QuizApi.as_view()),
    path('api/quest/', views.QuestionApi.as_view()),
]
