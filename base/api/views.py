from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view ,permission_classes
from rest_framework.permissions import IsAuthenticated

from .serializers import NoteSerializer
from base.models import Note


@api_view(['GET'])
def getRoutes(req):
    routes = [
        '/api/token',
        '/api/token/refresh',
        '/api/notes'
    ]
    # return JsonResponse(routes , safe=False)
    return Response(routes) 

@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def getNotes(req):
    user = req.user
    # notes = Note.objects.all()
    notes = user.note_set.all()
    serializer = NoteSerializer(notes , many = True)
    return Response(serializer.data)