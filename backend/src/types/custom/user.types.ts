export type Role = "SUPERADMIN" | "SHOPKEEPER" | "DISTRIBUTOR" | 'undefined'

export type User = {
    id: string,
    role?: Role
}