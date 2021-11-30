function CreateObject(arr) {

    obj = {};
    for (let i = 1; i < arr.length; i += 2) {

        if (obj[arr[i - 1]] === undefined) {
            obj[arr[i - 1]] = arr[i];
        }
    }
    return obj

}

module.exports = CreateObject;
