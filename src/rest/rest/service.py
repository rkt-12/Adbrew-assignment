#file for todo service logic

from bson import ObjectId

class TodoService:
    def __init__(self, db):
        self.collection = db["todos"]

    def list_todos(self): # lists down all items in the todo collection
        todos = []
        for todo in self.collection.find({}, {"description": 1}):
            todos.append({
                "_id": str(todo["_id"]),
                "description": todo["description"]
            })
        return todos

    def create_todo(self, description: str):  # creates a new todo item with the given description
        description = description.strip()

        if not description:
            raise ValueError("Please enter a description")

        result = self.collection.insert_one({
            "description": description
        })

        return {
            "_id": str(result.inserted_id),
            "description": description
        }
