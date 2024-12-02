import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { BreadcrumbComponent } from "../../../components/breadcrumb/breadcrumb.component";
import { BreadcrumbItemComponent } from "../../../components/breadcrumb-item/breadcrumb-item.component";
import { ContainerComponent } from "../../../components/container/container.component";
import { IllustrationComponent } from "../../../components/illustration/illustration.component";
import { ButtonComponent } from "../../../components/button/button.component";
import { ListComponent } from "../../../components/list/list.component";
import { ListItemComponent } from "../../../components/list-item/list-item.component";
import { ExerciseModel } from "../../../shared/model/exercise-model";
import { ExerciseService } from "../../../shared/services/exercise.service";
import { ErrorResponse } from "../../../shared/http/error-response";
import { FormComponent } from "../../../components/form/form.component";
import { WorkoutModel } from "../../../shared/model/workout-model";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { FormsModule } from "@angular/forms";


@Component({
    selector: 'app-exercises',
    standalone: true,
    imports: [
        BreadcrumbComponent,
        BreadcrumbItemComponent,
        ContainerComponent,
        IllustrationComponent,
        ButtonComponent,
        RouterLink,
        ListComponent,
        ListItemComponent,
        FormComponent,
        NgMultiSelectDropDownModule,
        FormsModule,
    ],
    templateUrl: './exercises-page.component.html',
    styleUrl: './exercises-page.component.scss'
})
export class ExercisesPageComponent implements OnInit {

    hasExercises: boolean = false;

    searchFilter: string = "";

    originalExerciseList: WorkoutModel[] = [];

    exerciseList: ExerciseModel[] = []

    constructor(
        private _exerciseService: ExerciseService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.exerciseList = this.route.snapshot.data['exerciseList'];
        this.originalExerciseList = JSON.parse(JSON.stringify(this.exerciseList));

        this.hasExercises = this.exerciseList.length > 0;
    }

    editExercise(exercise: ExerciseModel) {
        this.router.navigateByUrl("/app/exercises/edit/" + exercise.id);
    }

    deleteExercise(exercise: ExerciseModel) {
        if (!confirm("Deseja realmente deletar este exercício?")) {
            return;
        }

        this._exerciseService.deleteExercise(exercise.id).subscribe({
            next: () => {
                this.exerciseList = this.exerciseList.filter((item) => item.id !== exercise.id);
                this.originalExerciseList = JSON.parse(JSON.stringify(this.exerciseList));

                alert("Exercício deletado com sucesso!");
            },
            error: (error: ErrorResponse) => {
                alert(`Erro: ${ error.message }`);
            }
        });
    }

    doFilter() {
        if (!this.searchFilter) {
            this.exerciseList = JSON.parse(JSON.stringify(this.originalExerciseList));
            return
        };

        this._exerciseService.listExercises(this.searchFilter).subscribe({
            next: (response: any) => {
                this.exerciseList = response;
            },
            error: (error) => {
                alert(`Erro: ${error.message}`);
            }
        });
    }
}
