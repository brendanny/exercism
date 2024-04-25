#include "nth_prime.h"
#include <cmath>
#include <stdexcept>

namespace nth_prime {
int nth(int prime) {
  if (prime == 0) {
    throw std::domain_error("There is no zero-th prime");
  }
  if (prime == 1) {
    return 2;
  }
  int count = 1;
  int i = 2;
  while (count < prime) {
    if (is_prime(i)) {
      count++;
    }
    ++i;
  }
  return --i;
}

bool is_prime(int num) {
  bool prime = true;
  for (int i = 2; i < std::sqrt(num) + 1; ++i) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
} // namespace nth_prime
