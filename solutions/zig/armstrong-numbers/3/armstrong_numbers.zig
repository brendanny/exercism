const std = @import("std");

pub fn isArmstrongNumber(num: u128) bool {
    var num_var: u128 = num;
    if (num == 0) {
        return true;
    }
    const num_digits: u8 = @intCast(std.math.log10(num) + 1);
    var sum: u128 = 0;

    for (0..num_digits) |_| {
        sum += std.math.pow(u128, (num_var % 10), num_digits);
        num_var /= 10;
    }
    return num == sum;
}
