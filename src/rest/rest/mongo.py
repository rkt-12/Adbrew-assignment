#file for central mongo db connection

import os
from pymongo import MongoClient

def get_db():
    mongo_uri = f"mongodb://{os.environ['MONGO_HOST']}:{os.environ['MONGO_PORT']}"
    client = MongoClient(mongo_uri)
    db = client["test_db"]

    db.todos.create_index("description")   #create index on description field for faster search

    return db
