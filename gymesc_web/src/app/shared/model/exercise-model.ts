import { ExerciseTypeEnum } from "../enum/exercise-type.enum";
import { MuscleEnum } from "../enum/muscle.enum";

export class ExerciseModel {

    id!: number | string;

    name!: string;

    description!: string;

    exerciseTypeEnum!: ExerciseTypeEnum;

    muscleEnumList!: MuscleEnum[];
}
