from rest_framework.generics import ListAPIView, RetrieveAPIView,CreateAPIView

from todohome.models import ToDoHome
from .serializers import ToDoHomeSerializer
class ToDoHomeListView(ListAPIView):
    queryset = ToDoHome.objects.all()
    serializer_class = ToDoHomeSerializer

class ToDoHomeDetailView(RetrieveAPIView):
    queryset = ToDoHome.objects.all()
    serializer_class = ToDoHomeSerializer
    lookup_field="pk"
        
class ToCreateAPIView(CreateAPIView):
    queryset=ToDoHome.objects.all()
    serializer_class=ToDoHomeSerializer