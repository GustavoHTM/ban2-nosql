import { UserModel } from "./user-model";

export interface LoginResponse {
    jwt: string;
    userDTO: UserModel;
}
