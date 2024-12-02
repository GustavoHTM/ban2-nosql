import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { WorkoutService } from "../services/workout.service";
import { WorkoutModel } from "../model/workout-model";

export const WorkoutResolver: ResolveFn<Observable<WorkoutModel>> = (route, state) => {
    const _workoutService = inject(WorkoutService);
    const exerciseId = route.paramMap.get('id') || ""

    return _workoutService.getById(exerciseId)
};
