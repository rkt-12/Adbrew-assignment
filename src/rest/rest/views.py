import logging
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .mongo import get_db

from .service import TodoService

logger = logging.getLogger(__name__)

db = get_db()  # mongo db connection
todo_service = TodoService(db)  # todo service instance

class TodoListView(APIView):

    def get(self, request):  # GET requests to list all todo items
        try:
            todos = todo_service.list_todos()
            return Response(todos, status=status.HTTP_200_OK)

        except Exception as e:
            logger.exception("Failed to fetch todos")
            return Response(
                {"error": "Internal server error"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    def post(self, request):  # POST requests to create a new todo item
        try:
            description = request.data.get("description", "")

            todo = todo_service.create_todo(description)
            return Response(todo, status=status.HTTP_201_CREATED)

        except ValueError as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )

        except Exception as e:
            logger.exception("Failed to create todo")
            return Response(
                {"error": "Internal server error"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
