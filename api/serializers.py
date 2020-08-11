from rest_framework import serializers
from api.models import CodingSample


class CodingSampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodingSample
        fields = ('id', 'title', 'description', 'description_picture', 'language', 'code', 'chart')
