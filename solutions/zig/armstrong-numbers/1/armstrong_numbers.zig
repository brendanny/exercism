const std = @import("std");

pub fn isArmstrongNumber(num: u128) bool {
    var num_var: u128 = num;
    if (num > 0) {
        const num_digits = @as(u16, @intFromFloat(@ceil(@log10(@as(f128, @floatFromInt(num_var))))));
        var sum: u128 = 0;

        for (0..num_digits) |_| {
            sum += std.math.pow(u128, (num_var % 10), num_digits);
            num_var /= 10;
        }
        return num == sum;
    }
    return true;
}
