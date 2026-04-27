import type { User } from "../custom/user.types";
declare global {
    namespace Express {
        interface Request {
            user?: User
        }
    }
}

export { }