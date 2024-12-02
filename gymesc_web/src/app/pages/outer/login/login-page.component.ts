import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { ContainerComponent } from "../../../components/container/container.component";
import { FormComponent } from "../../../components/form/form.component";
import { LogoComponent } from "../../../components/logo/logo.component";
import { IllustrationComponent } from "../../../components/illustration/illustration.component";
import { LoginModel } from "../../../shared/model/login-model";
import { UserService } from "../../../shared/services/user.service";
import { AuthService } from "../../../shared/http/auth.service";
import { LoginResponse } from "../../../shared/model/login-response";
import { ErrorResponse } from "../../../shared/http/error-response";

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [
        ContainerComponent,
        FormComponent,
        FormsModule,
        LogoComponent,
        IllustrationComponent,
        RouterLink
    ],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

    loginData: LoginModel = new LoginModel();

    constructor(
        private _userService: UserService,
        private router: Router,
        private authService: AuthService
    ) {}

    doLogin() {
        this._userService.doLogin(this.loginData).subscribe({
            next: (response: LoginResponse) => {
                this.authService.setAuthToken(response.jwt);
                this.router.navigateByUrl("/app/home");
            },
            error: (error: ErrorResponse) => {
                alert(`Erro: ` + error.message);
            }
        });
    }
}