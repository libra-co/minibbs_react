export const TokenKey = 'token'

export const setToken = (key: string, value: string) => {
    window.localStorage.setItem(key, value)
}
export const getToken = (key: string) => {
    return window.localStorage.getItem(key)
}
