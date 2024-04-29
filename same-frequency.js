function sameFrequency(num1, num2) {
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;

    const countNum1 = {};
    const countNum2 = {};

    for (let char of strNum1) {
        countNum1[char] = (countNum1[char] || 0) + 1;
    }

    for (let char of strNum2) {
        countNum2[char] = (countNum2[char] || 0) + 1;
    }

    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}
