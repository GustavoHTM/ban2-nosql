import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbComponent } from "../../../components/breadcrumb/breadcrumb.component";
import { BreadcrumbItemComponent } from "../../../components/breadcrumb-item/breadcrumb-item.component";
import { FormComponent } from "../../../components/form/form.component";
import { ContainerComponent } from "../../../components/container/container.component";
import { IllustrationComponent } from "../../../components/illustration/illustration.component";
import { UserModel } from "../../../shared/model/user-model";
import { UserService } from "../../../shared/services/user.service";
import { AuthService } from "../../../shared/http/auth.service";

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [
        BreadcrumbComponent,
        BreadcrumbItemComponent,
        FormComponent,
        ContainerComponent,
        IllustrationComponent,
        FormsModule,
        CommonModule
    ],
    templateUrl: './settings-page.component.html',
    styleUrl: './settings-page.component.scss'
})
export class SettingsPageComponent implements OnInit {

    userData: UserModel = new UserModel();

    originalUserData: UserModel = new UserModel();

    showSaveButton = false;

    constructor(
        private _userService: UserService,
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.userData = this.route.snapshot.data["userData"];
        this.updateOriginalUserData(this.userData);
    }

    onChanges() {
        this.showSaveButton = JSON.stringify(this.userData) !== JSON.stringify(this.originalUserData)
    }

    saveChanges() {
        this._userService.updateUser(this.userData).subscribe({
            next: () => {
                alert('Dados atualizados com sucesso');
                this.showSaveButton = false;
                this.updateOriginalUserData(this.userData);
            },
            error: (err) => {
                alert('Erro ao atualizar os dados: ' + err.message);
            }
        });
    }

    deleteAccount() {
        if (!confirm('Tem certeza de que deseja apagar sua conta? Esta ação não pode ser desfeita.')) return;

        this._userService.deleteUser().subscribe({
            next: () => {
                alert('Conta apagada com sucesso');
                this.authService.removeAuthToken();
                this.router.navigateByUrl('/login');
            },
            error: (err) => {
                alert('Erro ao apagar a conta' + err.message);
            }
        });
    }

    private updateOriginalUserData(userData: UserModel): void {
        this.originalUserData = JSON.parse(JSON.stringify(userData));
        Object.freeze(this.originalUserData);
    }

}
