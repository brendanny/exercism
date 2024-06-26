   update "difference-of-squares"
      set result = power(number * (number + 1) / 2, 2)
    where property = 'squareOfSum';

   update "difference-of-squares"
      set result = number * (number + 1) * (2 * number + 1) / 6
    where property = 'sumOfSquares';

   update "difference-of-squares"
      set result = power(number * (number + 1) / 2, 2) - number * (number + 1) * (2 * number + 1) / 6
    where property = 'differenceOfSquares';