from django.shortcuts import render
from rest_framework import viewsets
from api.serializers import CodingSampleSerializer
from api.models import CodingSample


class CodingSampleView(viewsets.ModelViewSet):
    serializer_class = CodingSampleSerializer
    queryset = CodingSample.objects.all()
