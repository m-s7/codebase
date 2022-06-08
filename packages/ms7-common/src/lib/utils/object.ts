export const pickOne = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key]