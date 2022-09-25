export const IsZero = <T extends { length: number }>(value: T): boolean => {
    return value.length === 0
}
