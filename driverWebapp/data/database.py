# def WriteToDatabase(file):
#     file_obj=open(file, 'r')
#     print(file_obj.readline())

import csv
import os
import io
from .models import Node

def load_database():
    file="/home/agnieszka/hackyeah/WelcomeToTheDjango/driverWebapp/coordinates.txt"
    with open(file) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            _, created = Node.objects.update_or_create(
                X=row[0],
                Y=row[1],
            )


