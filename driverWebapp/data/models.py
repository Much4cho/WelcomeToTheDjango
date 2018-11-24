from django.db import models
from django.contrib.auth.models import User


class Node(models.Model):
    X = models.DecimalField(max_digits=9, decimal_places=3)
    Y = models.DecimalField(max_digits=9, decimal_places=3)

    def __str__(self):
        return "{0} vs {1}".format(
            self.x, self.y
        )
    


class Edge(models.Model):
    StartingNode = models.ForeignKey(Node, related_name="StartingNode", on_delete=models.CASCADE)
    EndingNode = models.ForeignKey(Node, related_name="EndingNode", on_delete=models.CASCADE)
    IsClosed = models.BooleanField(default=False)
    Height = models.DecimalField(max_digits=9, decimal_places=2)
    Width = models.DecimalField(max_digits=9, decimal_places=2)
    Weight = models.DecimalField(max_digits=9, decimal_places=2)