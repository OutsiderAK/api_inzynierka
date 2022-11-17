from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Fishka, Article, Question, Quiz, CustomUser, Category
from rest_framework import status
from .serializers import *
from rest_framework import generics
from django.http import Http404
from rest_framework import viewsets, filters


# Create your views here.

class UserAPI(APIView):

    def get(self, request):
        data = CustomUser.objects.all().order_by("-quiz_points")
        serializer = UserSerializer(data, many=True)
        return Response(serializer.data)


class UserSingleAPI(generics.ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        id = self.kwargs['id']
        return CustomUser.objects.filter(id=id)


class FishkaApi(APIView):

    def get(self, request):
        data = Fishka.objects.all()
        serializer = FishkaSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = FishkaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SingleFishkaApi(APIView):
    serializer_class = FishkaSerializer

    def get_object(self, id):
        try:
            return Fishka.objects.filter(id=id)
        except Fishka.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):
        event = self.get_object(id)
        serializer = FishkaSerializer(event, many=True)
        return Response(serializer.data)

    def delete(self, request, id, format=None):
        snippet = self.get_object(id)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ArticleApi(APIView):

    def get(self, request):
        data = Article.objects.all()
        serializer = ArticleSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SingleArticleApi(generics.ListAPIView):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        slug = self.kwargs['string']
        return Article.objects.filter(slug=slug)


class QuestionApi(APIView):

    def get(self, request):
        data = Question.objects.all()
        serializer = QuestionSerializer(data, many=True)
        return Response(serializer.data)

    # PUT do weryfikowaania odpowiedzi, user_id musimy dostawać w pucie od frontu
    def put(self, request):
        id = request.data['id']
        answer = request.data['answer']
        user_id = request.data['user_id']
        question = Question.objects.get(id=id)
        user = CustomUser.objects.get(id=user_id)
        if question.answer == answer:
            user.quiz_points += 1
            user.save()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_406_NOT_ACCEPTABLE)

    # POST tylko do tworzenia nowycch pytań
    def post(self, request):
        serializer = QuestionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class QuizApi(APIView):

    def get(self, request):
        data = Quiz.objects.all()
        serializer = QuizSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = QuizSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryAPI(APIView):

    def get(self, request):
        data = Category.objects.all()
        serializer = CategorySerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
