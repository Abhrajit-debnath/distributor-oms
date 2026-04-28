export type Role = "SUPERADMIN" | "SHOPKEEPER" | "DISTRIBUTOR"

export type User = {
    id: string,
    role: Role
}