import { ResolveFn } from '@angular/router';
import { ExerciseService } from "../services/exercise.service";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { ExerciseModel } from "../model/exercise-model";

export const ExerciseResolver: ResolveFn<Observable<ExerciseModel>> = (route, state) => {
    const _exerciseService = inject(ExerciseService);
    const exerciseId = route.paramMap.get('id') || ""

    return _exerciseService.getById(exerciseId)
};
