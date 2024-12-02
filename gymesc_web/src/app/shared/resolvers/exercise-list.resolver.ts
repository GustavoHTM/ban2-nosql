import { ResolveFn } from '@angular/router';
import { ExerciseService } from "../services/exercise.service";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { ExerciseModel } from "../model/exercise-model";

export const ExerciseListResolver: ResolveFn<Observable<ExerciseModel[]>> = (route, state) => {
    const _exerciseService = inject(ExerciseService);
    return _exerciseService.listExercises()
};
