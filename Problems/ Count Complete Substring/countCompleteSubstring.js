var countCompleteSubstrings = function(word, k) {
    let ans = 0;
    let result = "";
    const n = word.length;

    for (let i = 0; i < n; i++) {
        result += word[i];
        if (i < n - 1 && Math.abs(word.charCodeAt(i) - word.charCodeAt(i + 1)) > 2) {
            ans += func(result, k);
            result = "";
        }
    }
    ans += func(result, k);
    return ans;
};

const check = (freq, j, k) => {
    let count = 0;
    for (let i = 0; i < freq.length; i++) {
        if (freq[i] === 0) continue;
        if (freq[i] !== k) return false;
        count++;
    }
    return count <= j;
};

const func = (s, k) => {
    let count = 0;
    const n = s.length;
    for (let j = 1; j <= 26; j++) {
        const len = k * j;
        const freq = Array(26).fill(0);
        if (len > n) break;

        // Initialize the frequency array for the first window
        for (let i = 0; i < len; i++) {
            freq[s.charCodeAt(i) - 97]++;
        }
        if (check(freq, j, k)) count++;

        // Sliding window to check all substrings of length `len`
        for (let i = len; i < n; i++) {
            freq[s.charCodeAt(i - len) - 97]--;
            freq[s.charCodeAt(i) - 97]++;
            if (check(freq, j, k)) count++;
        }
    }
    return count;
};