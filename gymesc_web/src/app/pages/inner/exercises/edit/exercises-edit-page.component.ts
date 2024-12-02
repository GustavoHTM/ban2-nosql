import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { BreadcrumbItemComponent } from "../../../../components/breadcrumb-item/breadcrumb-item.component";
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { ContainerComponent } from "../../../../components/container/container.component";
import { FormComponent } from "../../../../components/form/form.component";
import { ExerciseModel } from "../../../../shared/model/exercise-model";
import { ExerciseService } from "../../../../shared/services/exercise.service";
import { IDropdownSettings, NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MuscleEnum, MuscleEnumHelper } from '../../../../shared/enum/muscle.enum';

@Component({
    selector: 'app-exercices-edit-page',
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
    templateUrl: './exercises-edit-page.component.html',
    styleUrl: './exercises-edit-page.component.scss'
})
export class ExercisesEditPageComponent implements OnInit {

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
    ) {
    }

    ngOnInit(): void {
        this.exerciseData = this.route.snapshot.data["exerciseData"];
    }

    doUpdateExercise() {
        this._exerciseService.updateExercise(this.exerciseData).subscribe({
            next: () => {
                alert("Exercício atualizado com sucesso!");
                this.router.navigateByUrl("/app/exercises");
            },
            error: (error) => {
                alert(`Erro: ${ error.message }`);
            }
        })
    }
}

