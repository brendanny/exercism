const std =@import("std");

pub fn isIsogram(str: []const u8) bool {
    var seen = std.StaticBitSet(26).initEmpty();
    for (str) |char| {
        if (std.ascii.isAlphabetic(char)) {
            const lowercase = std.ascii.toLower(char);
            if (seen.isSet(lowercase - 'a')) {
                return false;
            } else {
                seen.set(lowercase - 'a');
            }
        }
    }
    return true;
}
