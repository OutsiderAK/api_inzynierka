from rest_framework import serializers
from .models import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings
from django.contrib.auth.models import update_last_login
from django.core.exceptions import ObjectDoesNotExist


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'is_active']
        read_only_field = ['is_active']


class FishkaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fishka
        fields = ['id', 'text', 'reverse', 'category', 'author']


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['title', 'img', 'section', 'author', 'slug']
        read_only_field = ['slug']


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'question', 'op1', 'op2', 'op3', 'op4', 'answer', 'quiz']


class QuizSerializer(serializers.ModelSerializer):
    questionFK = serializers.StringRelatedField(many=True)

    class Meta:
        model = Quiz
        fields = ['id', 'name', 'category', 'questionFK']
