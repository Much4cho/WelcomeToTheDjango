from models import Edge

class EdgeFilter:
    def filter(vehicle):
        return Edge.objects
            .except(IsClosed)
            .filter(Height == vehicle.Height)
            .filter(Width == vehicle.Width)
            .filter(Weight == vehicle.Weight)