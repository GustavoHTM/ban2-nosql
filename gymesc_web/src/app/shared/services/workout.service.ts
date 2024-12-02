import { Injectable } from '@angular/core';
import { BaseHttp } from '../http/base-http';
import { WorkoutModel } from '../model/workout-model';
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class WorkoutService extends BaseHttp {

    protected getBasePath(): string {
        return "/workout"
    }

    getById(id: number | string): Observable<WorkoutModel> {
        return this.get<WorkoutModel>(
            this.secureUrl('/' + id)
        );
    }

    createWorkout(workoutData: WorkoutModel) {
        return this.post<any>(
            this.secureUrl(), workoutData
        );
    }

    updateWorkout(workoutData: WorkoutModel) {
        return this.put<any>(
            this.secureUrl(), workoutData
        );
    }

    deleteWorkout(id: number | string) {
        return this.delete<any>(
            this.secureUrl('/' + id)
        );
    }

    listWorkouts(search?: string): Observable<WorkoutModel[]> {
        return this.get<WorkoutModel[]>(
            this.secureUrl(search ? "?search=" + search : ""),
        );
    }
}
