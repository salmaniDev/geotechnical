export function isSet(item) {
    if (item != 'undefined' && item != undefined && item != false && item != null && item != "") {
        return true;
    }
    return false;
}