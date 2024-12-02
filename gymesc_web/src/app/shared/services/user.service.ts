import { Injectable } from '@angular/core';
import { BaseHttp } from '../http/base-http';
import { LoginResponse } from '../model/login-response';
import { LoginModel } from '../model/login-model';
import { UserModel } from "../model/user-model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService extends BaseHttp {

    protected getBasePath(): string {
        return "/user"
    }

    public doLogin(loginData: LoginModel) {
        return this.post<LoginResponse>(
            this.publicUrl('/login'), loginData
        );
    }

    public doCreateUser(registerData: any) {
        return this.post<any>(
            this.publicUrl(), registerData
        );
    }

    public loadUserData(): Observable<UserModel> {
        return this.get<UserModel>(
            this.secureUrl()
        );
    }

    public updateUser(userData: UserModel) {
        return this.put<any>(
            this.secureUrl(), userData
        );
    }

    public deleteUser() {
        return this.delete<any>(
            this.secureUrl()
        );
    }
}