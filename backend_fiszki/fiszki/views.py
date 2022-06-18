from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Fishka
from rest_framework import status
from .serializers import FishkaSerializer
from rest_framework import generics

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


class SingleFishkaApi(generics.ListAPIView):
    serializer_class = FishkaSerializer

    def get_queryset(self):
        id = self.kwargs['id']
        return Fishka.objects.filter(id=id)

