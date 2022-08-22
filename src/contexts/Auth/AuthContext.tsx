import { createContext } from "react";
import { IUser } from "../../types/User";


export type AuthContextType = {
    user: IUser | null;
    signIn: (email: string, password: string) => Promise<boolean>;
    signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);