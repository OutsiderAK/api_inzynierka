from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Fishka
from rest_framework import status
from .serializers import FishkaSerializer





<<<<<<< HEAD
# Create your views here.
=======
class FishkaApi(APIView):
>>>>>>> 5aedab81e3e3d2d9f070505fc8fbd05fbd7cbe37

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