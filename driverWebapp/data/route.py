from .graph import *

from collections import namedtuple

# Node = namedtuple('Node', 'id, X, Y')
# Edge = namedtuple('Edge', 'StartingNode, EndingNode')

class DijkstraAlgorithm():
    def __init__(self, graph):
        self.graph = graph


    def findRoute(self, startNode, endNode):
        assert startNode in self.graph.nodes, 'Such start node doesn\'t exist'
        assert endNode in self.graph.nodes, 'Such end node doesn\'t exist'
        distances = {node: inf for node in self.graph.nodes}
        previous_nodes = {
            node: None for node in self.graph.nodes
        }




        distances[startNode] = 0
        nodes2 = self.graph.nodes;

        while nodes2:
            current_node = min(
                nodes2, key=lambda node: distances[node])
            nodes2.remove(current_node)
            if distances[current_node] == inf:
                break
            
            for neighbour, cost in self.graph.neighbours.get(current_node, []):
                alternative_route = distances[current_node] + cost
                print(distances[current_node])
                print(cost)
                print(alternative_route)
                if alternative_route < distances[neighbour]:
                    distances[neighbour] = alternative_route
                    previous_nodes[neighbour] = current_node

        path, current_node = deque(), endNode
        while previous_nodes[current_node] is not None:
            path.appendleft(current_node)
            current_node = previous_nodes[current_node]
        if path:
            path.appendleft(current_node)
        return path


###### TEST DATA
# nodes = [
#     Node(1, 3, 3),
#     Node(2, 5, 3),
#     Node(3, 6, 3),
#     Node(4, 3, 1),
#     Node(5, 6, 1),
#     Node(6, 6, -2),
#     Node(7, 3, -2),
#     Node(8, -3, -2),
#     Node(9, -3, 1),
# ]

# graph = Graph(
#     [
#         Edge(nodes[1-1], nodes[2-1]),
#         Edge(nodes[2-1], nodes[1-1]),
#         Edge(nodes[2-1], nodes[3-1]),
#         Edge(nodes[3-1], nodes[5-1]),
#         Edge(nodes[5-1], nodes[4-1]),
#         Edge(nodes[4-1], nodes[5-1]),
#         Edge(nodes[5-1], nodes[6-1]),
#         Edge(nodes[6-1], nodes[7-1]),
#         Edge(nodes[4-1], nodes[7-1]),
#         Edge(nodes[7-1], nodes[4-1]),
#         Edge(nodes[7-1], nodes[8-1]),
#         Edge(nodes[8-1], nodes[9-1]),
#         Edge(nodes[9-1], nodes[4-1]),
#         Edge(nodes[1-1], nodes[4-1]),
#         Edge(nodes[4-1], nodes[1-1]),
#     ],
#     nodes
# )
