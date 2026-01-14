pub const ComputationError = error{IllegalArgument};

pub fn steps(number: usize) anyerror!usize {
    if (number <= 0) {
        return ComputationError.IllegalArgument;
    }
    var count: usize = 0;
    var val: usize = number;
    while (val != 1) {
        switch (val % 2) {
            1 => val = 3 * val + 1,
            0 => val /= 2,
            else => {},
        }
        count = count + 1;
    }
    return count;
}
