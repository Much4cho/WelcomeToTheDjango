# def WriteToDatabase(file):
#     file_obj=open(file, 'r')
#     print(file_obj.readline())

import csv
import os
import io
from .models import *

def load_database():
    Node.objects.all().delete()
    file= "data/coordinates.txt"
    with open(file) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            _, created = Node.objects.update_or_create(
                X=row[0],
                Y=row[1],
            )

def load_edges():
    file= "data/edges.txt"
    with open(file) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            _, created = Edge.objects.update_or_create(
                StartingNode_id=row[0],
                EndingNode_id=row[1],
            )
