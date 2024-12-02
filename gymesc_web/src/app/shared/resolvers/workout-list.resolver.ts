import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { WorkoutService } from "../services/workout.service";
import { WorkoutModel } from "../model/workout-model";

export const WorkoutListResolver: ResolveFn<Observable<WorkoutModel[]>> = (route, state) => {
    const _workoutService = inject(WorkoutService);
    return _workoutService.listWorkouts()
};
