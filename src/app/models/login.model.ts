import { MenuItem } from "primeng/api";

export interface LoginState {
    login: MenuItem
}

export interface LoggingInterface {
    email: string,
    password: string
}

export interface SingupInterface {
    registeredOn: Date,
    name: string,
    email: string,
    passord: string,
    legal: any[]
}

