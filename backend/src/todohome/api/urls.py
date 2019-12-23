from django.conf.urls import url

from .views import ToDoHomeListView, ToDoHomeDetailView

urlpatterns = [
    url('',ToDoHomeListView.as_view()),
    url('<pk>', ToDoHomeDetailView.as_view()),
]
