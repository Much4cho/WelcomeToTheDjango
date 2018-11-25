from django.db import models
from django.contrib.auth.models import User


class Node(models.Model):

    X = models.DecimalField(max_digits=9, decimal_places=3)
    Y = models.DecimalField(max_digits=9, decimal_places=3)

    def __str__(self):
        return "({0}, {1})".format(
            self.X, self.Y
        )


class In(models.Model):

    NodeIn = models.ForeignKey(Node, related_name="NodeIn", on_delete=models.CASCADE)
    OnlyCars = models.BooleanField(default=False)


    def __str__(self):
        return "({0} -> {1})".format(
            self.NodeIn, self.OnlyCars
        )


class Out(models.Model):

    NodeOut = models.ForeignKey(Node, related_name="NodeOut", on_delete=models.CASCADE)
    OnlyCars = models.BooleanField(default=False)


    def __str__(self):
        return "({0} -> {1})".format(
            self.NodeOut, self.OnlyCars
        )




class Edge(models.Model):

    StartingNode = models.ForeignKey(Node, related_name="StartingNode", on_delete=models.CASCADE)
    EndingNode = models.ForeignKey(Node, related_name="EndingNode", on_delete=models.CASCADE)
    IsClosed = models.BooleanField(default=False)
    Height = models.DecimalField(max_digits=9, decimal_places=2, default=0)
    Width = models.DecimalField(max_digits=9, decimal_places=2, default=0)
    Weight = models.DecimalField(max_digits=9, decimal_places=2, default=0)

    def __str__(self):
        return "{0} -> {1}".format(
            self.StartingNode, self.EndingNode
        )

