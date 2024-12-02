import { CategoryTypeEnum } from "../enum/category-type.enum";
import { ExerciseModel } from "./exercise-model";

export class WorkoutModel {

    id!: number | string;

    name!: string;

    description!: string;

    duration!: number;

    exerciseList!: ExerciseModel[];

    categoryTypeEnumList!: CategoryTypeEnum[];
}
