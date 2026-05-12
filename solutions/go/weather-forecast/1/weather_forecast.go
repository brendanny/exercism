// Package weather provides functions to get forecasts for different cities.
package weather

var (
    // CurrentCondition represents a weather condition in a string.
	CurrentCondition string
    // CurrentLocation represents a location in a string.
	CurrentLocation  string
)

// Forecast returns a string value containing a location and its current weather condition.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
