import { Injectable } from '@angular/core';
import { BaseHttp } from '../http/base-http';
import { ExerciseModel } from '../model/exercise-model';
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ExerciseService extends BaseHttp {

    protected getBasePath(): string {
        return "/exercise"
    }

    getById(id: number | string): Observable<ExerciseModel> {
        return this.get<any>(
            this.secureUrl('/' + id)
        );
    }

    listExercises(search?: string): Observable<ExerciseModel[]> {
        return this.get<ExerciseModel[]>(
            this.secureUrl(search ? "?search=" + search : ""),
        );
    }

    createExercise(exerciseData: ExerciseModel) {
        return this.post<any>(
            this.secureUrl(), exerciseData
        );
    }

    updateExercise(exerciseData: ExerciseModel) {
        return this.put<any>(
            this.secureUrl(), exerciseData
        );
    }

    deleteExercise(id: number | string) {
        return this.delete<any>(
            this.secureUrl('/' + id)
        );
    }
}
