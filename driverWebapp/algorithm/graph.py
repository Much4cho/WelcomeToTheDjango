from collections import deque, namedtuple
from cmath import sqrt


# we'll use infinity as a default distance to nodes.
inf = float('inf')
Edge = namedtuple('Edge', 'start, end, cost')


def make_edge(start, end):
  return Edge(start, end, calculateCost(start, end))

def calculateCost(start, end):
    return sqrt((end.X - start.X)^2 + (end.Y - start.Y)^2).real


class Graph:
    def __init__(self, edges, nodes):
        # let's check that the data is right
        # wrong_edges = [i for i in edges if len(i) not in [2, 3]]
        # if wrong_edges:
        #     raise ValueError('Wrong edges data: {}'.format(wrong_edges))
        self.edges = [make_edge(*edge) for edge in edges]
        self.nodes = nodes

    @property
    def neighbours(self):
        neighbours = {node: set() for node in self.nodes}
        for edge in self.edges:
            neighbours[edge.start].add((edge.end, edge.cost))

        return neighbours


    # def print2(self):
    #     for edge in self.edges:
    #         print(edge)
