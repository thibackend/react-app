
export function setLocalStore(key, value) {
    localStorage.setItem(key,JSON.stringify(value))
}

export function getLocalStore(key) {
    var data = JSON.parse(localStorage.getItem(key));
    return data;
}

