from rest_framework import serializers
from qweeco.board.models import Message


class MessageSerializer(serializers.Serializer):
    pk = serializers.IntegerField(read_only=True)
    email = serializers.CharField(required=True, allow_blank=True, max_length=100)
    text = serializers.CharField(style={'base_template': 'textarea.html'})

    def create(self, validated_data):
        """
        Create and return a new `Message` instance, given the validated data.
        """
        return Message.objects.create(**validated_data)

    class Meta:
        model = Message
        fields = ('id', 'email', 'text', 'created')