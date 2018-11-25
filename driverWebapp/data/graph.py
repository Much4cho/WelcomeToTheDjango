from collections import deque, namedtuple
from cmath import sqrt


# we'll use infinity as a default distance to nodes.
inf = float('inf')
Edge = namedtuple('Edge', 'start, end, cost')


def make_edge(start, end):
  return Edge(start, end, calculateCost(start, end))

def calculateCost(start, end):
    return sqrt((end.X - start.X)**2 + (end.Y - start.Y)**2).real


class Graph:
    def __init__(self, edges, nodes):
        self.edges = [make_edge(edge.StartingNode, edge.EndingNode) for edge in edges]
        self.nodes = nodes

    @property
    def neighbours(self):
        neighbours = {node: set() for node in self.nodes}
        for edge in self.edges:
            if edge.start not in neighbours:
                neighbours[edge.start] = set()
            neighbours[edge.start].add((edge.end, edge.cost))

        return neighbours


    # def print2(self):
    #     for edge in self.edges:
    #         print(edge)
