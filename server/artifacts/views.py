# from django.shortcuts import render
# from .models import Artifact
# from .serializers import ArtifactSerializer
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import generics

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Artifact
from .serializers import ArtifactSerializer

@api_view(['GET', 'POST'])
def artifact_list(request):
    """
    List all artifacts, or create a new artifact.
    """
    if request.method == 'GET':
        artifacts = Artifact.objects.filter(status="selected")
        serializer = ArtifactSerializer(artifacts, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ArtifactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Create your views here.

# class ArtifactList(generics.ListCreateAPIView):
#     queryset = Artifact.objects.all()
#     serializer_class = ArtifactSerializer
#
# class ArtifactView(APIView):
#
#     def get(self, pk):
#         selected = Artifact.objects.get(pk=1)
#         selected_stuff = ArtifactSerializer(selected)
#         # print('BARF', selected_stuff.data)
#         return Response({selected_stuff.data})
#

#
# class ArtifactView(generics.ListCreateAPIView):
#     queryset = Artifact.objects.all()
#     serializer_class = ArtifactSerializer
#
#     def get(self, request, format=None):
#         selected = Artifact.objects.all()
#         # Ash put the function here!
#         print("PLZ SEND HELP", selected)
#         selected_serializer = ArtifactSerializer(selected, many=True)
#         return Response({selected_serializer})
#

    # def post(self, request, pk, format=None):
    #     current_user = request.user
    #     request_data = json.loads(request.body)
    #     client_lesson = ClientLesson.objects.get(pk=request_data['lesson'])
    #     print('**************')
    #     print(request_data)
    #     print('**************')
    #     lesson = client_lesson.lesson
    #     answer = Answer.objects.get(pk=request_data['answer'])
    #     lesson_question = LessonQuestion.objects.filter(lesson=lesson, question=answer.question).first()
    #     print(LessonQuestion.objects.filter(lesson=lesson, question=answer.question).all())
    #     new_user_answer = UserAnswer.objects.create(lesson_question=lesson_question, answer=answer, user=current_user)
    #     print(new_user_answer)
    #     return self.return_next_question(lesson, current_user)
