from rest_framework import serializers
from api.models import CodingSample


class CodingSampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodingSample
        fields = ('id', 'title', 'description', 'language', 'code', 'chart')
