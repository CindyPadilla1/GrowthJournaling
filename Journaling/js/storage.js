const STORAGE_KEY = "luminaEntries";

function getEntries() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveEntries(entries) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}