from django.urls import path, include, re_path
from django.views.generic import TemplateView

from fiszki import views

urlpatterns = [
    # path('', ReactView.as_view(), name="something"),
    path('api/', include(('fiszki.routers', 'fiszki'))),
    path('api/category/', views.CategoryAPI.as_view()),
    path('api/category/<int:id>', views.SingleCategoryAPI.as_view()),
    path('api/au/', views.UserAPI.as_view()),
    path('api/au/<int:id>/', views.UserSingleAPI.as_view()),
    # fiszki
    path('api/fiszki/', views.FishkaApi.as_view()),
    path('api/fiszki/<int:id>', views.SingleFishkaApi.as_view()),
    # artykuły
    path('api/article/', views.ArticleApi.as_view()),
    re_path(r'^api/article/(?P<string>[\w\-]+)/$', views.SingleArticleApi.as_view()),
    # quizy
    path('api/quiz/', views.QuizApi.as_view()),
    path('api/quest/', views.QuestionApi.as_view()),
    # friends
    path('api/send_request', views.AddFriendAPI.as_view()),
    path('api/accept_request/', views.AcceptRequest.as_view()),
]
