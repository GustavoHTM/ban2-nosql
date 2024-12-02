import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "../services/user.service";
import { UserModel } from "../model/user-model";

export const UserResolver: ResolveFn<Observable<UserModel>> = (route, state) => {
    const _userService = inject(UserService);
    return _userService.loadUserData()
};
