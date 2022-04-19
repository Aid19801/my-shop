// export const saveToCache = (key: string, json: string) => {
//     const timestamp = JSON.stringify(Date.now());
//     localStorage.setItem('ts', timestamp);
//     localStorage.setItem(key, json);
// }

// export const getFromCache = (key: string) => {
//     const json = localStorage.getItem(key);
//     if (json) {
//         return JSON.parse(json);
//     } else {
//         return undefined;
//     }
// }

// export const removeFromCache = (key: string) => {
//     localStorage.removeItem(key);
// }