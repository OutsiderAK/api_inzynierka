from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Fishka, Article
from rest_framework import status
from .serializers import FishkaSerializer, ArticleSerializer
from rest_framework import generics
from django.http import Http404
from rest_framework import viewsets, filters


# Create your views here.

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


### STARA DZIAŁAJĄCA WERSJA ###
# class SingleFishkaApi(generics.ListAPIView):
#     serializer_class = FishkaSerializer
#
#     def get_queryset(self):
#         id = self.kwargs['id']
#         return Fishka.objects.filter(id=id)

### NOWA DO POPRAWY ###
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
