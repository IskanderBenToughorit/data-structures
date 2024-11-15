function longestSubstring(s, k) {
    let left = 0, maxLength = 0, maxSubstring = "";
    const charCount = new Map();

    for (let right = 0; right < s.length; right++) {
        charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);

        while (charCount.size > k) {
            charCount.set(s[left], charCount.get(s[left]) - 1);
            if (charCount.get(s[left]) === 0) charCount.delete(s[left]);
            left++;
        }

        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            maxSubstring = s.slice(left, right + 1);
        }
    }

    // Vérifier si la chaîne contient au moins K caractères
    if (new Set(s).size < k) {
        return "Not enoughcharacters";
    }

    return `${maxSubstring} with length ${maxLength}`;
}

// Exemples
console.log(longestSubstring("aabbaacdeeeeddded", 3)); // cdeeeeddded with length 11
console.log(longestSubstring("abcddefabc", 4));        // abcdd with length 5
console.log(longestSubstring("aaaabbbb", 4));          // Not enoughcharacters

  