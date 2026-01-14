pub fn isPangram(str: []const u8) bool {
    for (97..123) |c| {
        var contains = false;
        for (str) |c2| {
            if (c == c2 or c == c2 + 32) {
                contains = true;
            }
        }
        if (!contains) {
            return false;
        }
    }
    return true;
}
