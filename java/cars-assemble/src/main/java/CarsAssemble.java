public class CarsAssemble {

    public double productionRatePerHour(int speed) {
        int carsPerHour = 221;
        double productionRate = 0;
        if (speed <= 4) {
            productionRate = speed * carsPerHour;
        } else if (speed <= 8) {
            productionRate = 0.9 * speed * carsPerHour;
        } else if (speed == 9) {
            productionRate = 0.8 * speed * carsPerHour;
        } else if (speed == 10) {
            productionRate = 0.77 * speed * carsPerHour;
        } else {
            productionRate = 0;
        }
        return productionRate;
    }

    public int workingItemsPerMinute(int speed) {
        return (int) Math.floor(productionRatePerHour(speed) / 60);
    }
}
