import { Routes } from '@angular/router';
import { HomePageComponent } from "./pages/inner/home/home-page.component";
import { LoginPageComponent } from "./pages/outer/login/login-page.component";
import { RegisterPageComponent } from "./pages/outer/register/register-page.component";
import { ErrorPageComponent } from "./pages/inner/error/error-page.component";
import { ApplicationLayoutComponent } from "./components/layout/application-layout/application-layout.component";
import { ExercisesPageComponent } from "./pages/inner/exercises/exercises-page.component";
import { WorkoutsPageComponent } from "./pages/inner/workouts/workouts-page.component";
import { SettingsPageComponent } from "./pages/inner/settings/settings-page.component";
import { ExercisesAddPageComponent } from "./pages/inner/exercises/add/exercises-add-page.component";
import { WorkoutsAddPageComponent } from './pages/inner/workouts/add/workouts-add-page.component';
import { ExercisesEditPageComponent } from './pages/inner/exercises/edit/exercises-edit-page.component';
import { WorkoutsEditPageComponent } from './pages/inner/workouts/edit/workouts-edit-page.component';
import { ExerciseListResolver } from "./shared/resolvers/exercise-list.resolver";
import { ExerciseResolver } from "./shared/resolvers/exercise.resolver";
import { WorkoutListResolver } from "./shared/resolvers/workout-list.resolver";
import { UserResolver } from "./shared/resolvers/user.resolver";

export const routes: Routes = [
    {
        path: "app", component: ApplicationLayoutComponent, children: [
            { path: "home", title: "GymEsc | Menu principal", component: HomePageComponent },
            {
                path: "exercises", children: [
                    {
                        path: "",
                        title: "GymEsc | Exercícios",
                        component: ExercisesPageComponent,
                        resolve: {
                            exerciseList: ExerciseListResolver
                        }
                    },
                    {
                        path: "add",
                        title: "GymEsc | Criar exercício",
                        component: ExercisesAddPageComponent,
                    },
                    {
                        path: "edit/:id",
                        title: "GymEsc | Editar exercício",
                        component: ExercisesEditPageComponent,
                        resolve: {
                            exerciseData: ExerciseResolver
                        }
                    }
                ]
            },
            {
                path: "workouts", children: [
                    {
                        path: "",
                        title: "GymEsc | Treinos",
                        component: WorkoutsPageComponent,
                        resolve: {
                            workoutList: WorkoutListResolver
                        }
                    },
                    {
                        path: "add",
                        title: "GymEsc | Criar treino",
                        component: WorkoutsAddPageComponent,
                        // TODO recriar select de exercicios
                        // resolve: {
                        //     exerciseList: ExerciseListResolver
                        // }
                    },
                    {
                        path: "edit/:id",
                        title: "GymEsc | Editar treino",
                        component: WorkoutsEditPageComponent,
                        // TODO recriar select de exercicios
                        // resolve: {
                        //     exerciseList: ExerciseListResolver,
                        //     workoutData: WorkoutResolver
                        // }
                    }
                ]
            },
            {
                path: "settings",
                title: "GymEsc | Configurações",
                component: SettingsPageComponent,
                resolve: {
                    userData: UserResolver
                }
            },
            { path: "error", title: "GymEsc | Erro", component: ErrorPageComponent },
        ]
    },
    { path: "login", title: "GymEsc | Login", component: LoginPageComponent },
    { path: "register", title: "GymEsc | Cadastro", component: RegisterPageComponent },
    { path: "**", redirectTo: "/app/home" },
];
