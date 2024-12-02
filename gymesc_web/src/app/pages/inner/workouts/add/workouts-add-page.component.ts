import { CommonModule, NgFor, NgIf } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { IDropdownSettings, NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { BreadcrumbItemComponent } from "../../../../components/breadcrumb-item/breadcrumb-item.component";
import { ButtonComponent } from "../../../../components/button/button.component";
import { ContainerComponent } from "../../../../components/container/container.component";
import { IllustrationComponent } from "../../../../components/illustration/illustration.component";
import { FormComponent } from "../../../../components/form/form.component";
import { WorkoutModel } from "../../../../shared/model/workout-model";
import { ExerciseModel } from "../../../../shared/model/exercise-model";
import { WorkoutService } from "../../../../shared/services/workout.service";
import { ExerciseService } from "../../../../shared/services/exercise.service";
import { CategoryTypeEnum, CategoryTypeEnumHelper } from "../../../../shared/enum/category-type.enum";

@Component({
    selector: 'app-workouts-add-page',
    standalone: true,
    imports: [
        BreadcrumbComponent,
        BreadcrumbItemComponent,
        ButtonComponent,
        ContainerComponent,
        IllustrationComponent,
        FormComponent,
        RouterLink,
        FormsModule,
        NgFor,
        NgIf,
        CommonModule,
        NgMultiSelectDropDownModule
    ],
    templateUrl: './workouts-add-page.component.html',
    styleUrl: './workouts-add-page.component.scss'
})
export class WorkoutsAddPageComponent implements OnInit {

    workoutData: WorkoutModel = new WorkoutModel();

    exerciseList: ExerciseModel[] = [];

    categoryList: CategoryTypeEnum[] = CategoryTypeEnumHelper.values();

    dropdownSettings: IDropdownSettings = {
        singleSelection: false,
        idField: 'id',
        textField: 'name',
        selectAllText: 'Selecionar Todos',
        unSelectAllText: 'Desselecionar Todos',
        itemsShowLimit: 3,
        allowSearchFilter: true
    };

    constructor(
        private _exerciseService: ExerciseService,
        private _workoutService: WorkoutService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        // TODO recriar select de exercicios
        // this.exerciseList = this.route.snapshot.data["exerciseList"];

        this._exerciseService.listExercises().subscribe({
            next: (response: any) => {
                this.exerciseList = response;
            },
            error: (error) => {
                alert(`Erro: ${error.message}`);
            }
        });
    }

    doCreateWorkout() {
        this._workoutService.createWorkout(this.workoutData).subscribe({
            next: () => {
                alert("Treino criado com sucesso!");
                this.router.navigateByUrl("/app/workouts");
            },
            error: (error) => {
                alert(`Erro: ${ error.message }`);
            }
        });
    }
}
