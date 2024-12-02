import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BreadcrumbComponent } from "../../../components/breadcrumb/breadcrumb.component";
import { BreadcrumbItemComponent } from "../../../components/breadcrumb-item/breadcrumb-item.component";
import { ContainerComponent } from "../../../components/container/container.component";
import { IllustrationComponent } from "../../../components/illustration/illustration.component";
import { ButtonComponent } from "../../../components/button/button.component";
import { ListComponent } from "../../../components/list/list.component";
import { ListItemComponent } from "../../../components/list-item/list-item.component";
import { WorkoutModel } from "../../../shared/model/workout-model";
import { WorkoutService } from "../../../shared/services/workout.service";
import { ErrorResponse } from "../../../shared/http/error-response";
import { FormComponent } from "../../../components/form/form.component";
import { FormsModule } from "@angular/forms";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

@Component({
    selector: 'app-workouts',
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
        FormsModule,
        NgMultiSelectDropDownModule,
        RouterLinkActive
    ],
    templateUrl: './workouts-page.component.html',
    styleUrl: './workouts-page.component.scss'
})
export class WorkoutsPageComponent implements OnInit {

    hasWorkouts: boolean = false;

    searchFilter: string = "";

    originalWorkoutList: WorkoutModel[] = [];

    workoutList: WorkoutModel[] = [];

    constructor(
        private _workoutService: WorkoutService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.workoutList = this.route.snapshot.data["workoutList"];
        this.originalWorkoutList = JSON.parse(JSON.stringify(this.workoutList));

        this.hasWorkouts = this.workoutList.length > 0;
    }

    editWorkout(workout: WorkoutModel) {
        this.router.navigateByUrl("/app/workouts/edit/" + workout.id);
    }

    deleteWorkout(workout: WorkoutModel) {
        if (!confirm("Deseja realmente deletar este treino?")) {
            return;
        }

        this._workoutService.deleteWorkout(workout.id).subscribe({
            next: () => {
                this.workoutList = this.workoutList.filter((item) => item.id !== workout.id);
                this.originalWorkoutList = JSON.parse(JSON.stringify(this.workoutList));

                alert("Treino deletado com sucesso!");
            },
            error: (error: ErrorResponse) => {
                alert(`Erro: ${ error.message }`);
            }
        });
    }

    doFilter() {
        if (!this.searchFilter) {
            this.workoutList = JSON.parse(JSON.stringify(this.originalWorkoutList));
            return
        };

        this._workoutService.listWorkouts(this.searchFilter).subscribe({
            next: (response: any) => {
                this.workoutList = response;
            },
            error: (error) => {
                alert(`Erro: ${error.message}`);
            }
        });
    }
}
