"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language:
https://en.wikipedia.org/wiki/Guido_van_Rossum

This is a module docstring, used to describe the functionality
of a module and its functions and/or classes.
"""

PREPARATION_TIME = 2

# define the 'EXPECTED_BAKE_TIME' constant.
EXPECTED_BAKE_TIME = 40


# Remove 'pass' and complete the 'bake_time_remaining()' function below.
def bake_time_remaining(elapsed_bake_time):
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """

    return EXPECTED_BAKE_TIME - elapsed_bake_time


# Define the 'preparation_time_in_minutes()' function below.
# You might also consider using 'PREPARATION_TIME' here, if you have it defined.
def preparation_time_in_minutes(number_of_layers):
    """Calculate the preparation time in minutes.

    :param number_of_layers: int - number of layers in lasagna.
    :return: int - total preparation time (in minutes) derived from 'PREPARATION_TIME'.

    """
    return number_of_layers * PREPARATION_TIME



# define the 'elapsed_time_in_minutes()' function below.
# Remember to add a docstring (you can copy and then alter the one from bake_time_remaining.)
def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculate the elapsed time for cooking

    :param number_of_layers: int - number of layers in lasagna.
    :param elapsed_bake_time: int - number of minutes the lasagna has been cooking
    :return: int - total elapsed time.

    Function that takes number of layers and elapsed bake time and returns how
    many total minutes the lasagna has been preparing.
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
