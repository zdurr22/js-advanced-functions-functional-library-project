const makeStandardCollections = function(collection) {
    return collection instanceof Array ? collection.slice() : Object.values(collection)
}
let myEach = function(collection, callback) {
    let newCollection = makeStandardCollections(collection);

    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
    }
    return collection;
}

let myMap = function(collection, callback) {
    let newCollection = makeStandardCollections(collection);
    let newArr = []
    for (let i = 0; i < newCollection.length; i++) {
        newArr.push(callback(newCollection[i]));
    }
    return newArr;
}

let myReduce = function(collection, callback, acc) {
    let newCollection = makeStandardCollections(collection);

    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }

    for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
}

let myFind = function(collection, predicate) {
    let newCollection = makeStandardCollections(collection);

    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
            return newCollection[i];
        }
    }
    return undefined;
}

let myFilter = function(collection, predicate) {
    let newCollection = makeStandardCollections(collection);
    let newArr = []
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
            newArr.push(newCollection[i]);
        }
    }
    return newArr;
}

let mySize = function(collection) {
    let newCollection = makeStandardCollections(collection);

    return newCollection.length;
}

let myFirst = function(collection, int = false) {
    return int ? collection.slice(0, int) : collection[0];
}

let myLast = function(collection, int = false) {
    return int ? collection.slice(collection.length - int, collection.length) : collection[collection.length - 1];
}

let myKeys = function(obj) {
    const keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
};

let myValues = function(obj) {
    const values = [];
    for (let key in obj) {
        values.push(obj[key]);
    }
    return values;
}