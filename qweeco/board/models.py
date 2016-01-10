from django.db import models

class Message(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    email = models.CharField(max_length=100, blank=True, default='')
    text = models.TextField()

    class Meta:
        ordering = ('created',)
