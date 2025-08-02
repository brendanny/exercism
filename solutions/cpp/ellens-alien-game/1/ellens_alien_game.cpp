namespace targets {
class Alien {
    public:

    int x_coordinate;
    int y_coordinate;
    int health{3};

    Alien(int x, int y) :  
    x_coordinate(x),
    y_coordinate(y) {}

    int get_health() {
        return health;
    }

    bool hit() {
        health = health > 0 ? health-1 : 0;
        return true;
    }

    bool is_alive() {
        return (health > 0 ? true : false);
    }

    bool teleport(int a, int b) {
        x_coordinate = a;
        y_coordinate = b;
        return true;
    }

    bool collision_detection(Alien other_alien) {
        if (other_alien.x_coordinate == x_coordinate && other_alien.y_coordinate == y_coordinate) {
            return true;
        }

        return false;
    }
        
    };

}  // namespace targets