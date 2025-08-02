pub fn isPangram(str: []const u8) bool {
    for ('A'..'Z') |letter| {
        var contains = false;
        for (str) |char| {
            if (char == letter or char == letter + 'a' - 'A') {
                contains = true;
            }
        }
        if (!contains) {
            return false;
        }
    }
    return true;
}
