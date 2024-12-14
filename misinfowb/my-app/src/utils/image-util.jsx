
export function getImageURL(name) {
    return new URL(`../img/${name}`, import.meta.url).href
}