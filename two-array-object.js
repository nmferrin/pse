function twoArrayObject(keys, values) {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = i < values.length ? values[i] : null;
    }
    return obj;
}
