import os
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

class CustomPagination(PageNumberPagination):
    template = os.path.normpath(os.path.join(os.path.abspath(os.path.dirname(__file__)), 'templates/numbers.html'))

    def get_paginated_response(self, data):
        return Response({
           'next': self.get_next_link(),
           'previous': self.get_previous_link(),
           'count': self.page.paginator.count,
           'html': self.to_html(),
           'results': data
        })