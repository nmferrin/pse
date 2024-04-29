function constructNote(message, letters) {
    // Create a map to count the frequency of each character in the letters string
    let letterCounts = {};
    for (let char of letters) {
        if (letterCounts[char]) {
            letterCounts[char]++;
        } else {
            letterCounts[char] = 1;
        }
    }

    // Check if each character in the message can be constructed from the letters map
    for (let char of message) {
        if (!letterCounts[char] || letterCounts[char] === 0) {
            // If the char is not in letterCounts or there are no more of this char left, return false
            return false;
        }
        letterCounts[char]--;  // Use one of the chars
    }

    return true;  // If we never run out of characters, the note can be constructed
}
