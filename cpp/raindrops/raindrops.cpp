#include "raindrops.h"

namespace raindrops {
std::string convert(int num) {
  std::string output{""};

  if (num % 3 == 0) {
    output += "Pling";
  }
  if (num % 5 == 0) {
    output += "Plang";
  }
  if (num % 7 == 0) {
    output += "Plong";
  }
  if (output.empty()) {
    output = std::to_string(num);
  }

  return output;
}
} // namespace raindrops
