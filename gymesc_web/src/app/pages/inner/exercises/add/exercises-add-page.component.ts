import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { BreadcrumbItemComponent } from "../../../../components/breadcrumb-item/breadcrumb-item.component";
import { ButtonComponent } from "../../../../components/button/button.component";
import { ContainerComponent } from "../../../../components/container/container.component";
import { IllustrationComponent } from "../../../../components/illustration/illustration.component";
import { FormComponent } from "../../../../components/form/form.component";
import { ExerciseModel } from "../../../../shared/model/exercise-model";
import { ExerciseService } from "../../../../shared/services/exercise.service";
import { MuscleEnum, MuscleEnumHelper } from '../../../../shared/enum/muscle.enum';
import { IDropdownSettings, NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@Component({
    selector: 'app-exercices-add-page',
    standalone: true,
    imports: [
        BreadcrumbComponent,
        BreadcrumbItemComponent,
        ContainerComponent,
        FormComponent,
        RouterLink,
        FormsModule,
        NgMultiSelectDropDownModule
    ],
    templateUrl: './exercises-add-page.component.html',
    styleUrl: './exercises-add-page.component.scss'
})
export class ExercisesAddPageComponent {

    exerciseData: ExerciseModel = new ExerciseModel()

    muscleOptions: MuscleEnum[] = MuscleEnumHelper.values()

    dropdownSettings: IDropdownSettings = {
        singleSelection: false,
        selectAllText: 'Selecionar Todos',
        unSelectAllText: 'Desselecionar Todos',
        itemsShowLimit: 3,
        allowSearchFilter: true
    };

    constructor(
        private _exerciseService: ExerciseService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    doCreateExercise() {
        this._exerciseService.createExercise(this.exerciseData).subscribe({
            next: () => {
                alert("Exercício criado com sucesso!");
                this.router.navigateByUrl("/app/exercises");
            },
            error: (error) => {
                alert(`Erro: ${ error.message }`);
            }
        })
    }
}

