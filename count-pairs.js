function countPairs(arr, target) {
    let seen = new Set();
    let pairs = new Set();

    for (let num of arr) {
        if (seen.has(target - num)) {
            let sortedPair = JSON.stringify([Math.min(num, target - num), Math.max(num, target - num)]);
            pairs.add(sortedPair);
        }
        seen.add(num);
    }

    return pairs.size;
}
