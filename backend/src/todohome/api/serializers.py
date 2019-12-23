from rest_framework import serializers

from todohome.models import ToDoHome
class ToDoHomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDoHome
        fields = ('title', 'content')