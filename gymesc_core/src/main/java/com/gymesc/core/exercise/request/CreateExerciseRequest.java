package com.gymesc.core.exercise.request;

import java.util.List;
import java.util.Set;

import com.gymesc.core.base.enumeration.MuscleEnum;
import com.gymesc.core.exercise.repository.enumeration.ExerciseTypeEnum;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;

@Getter
public class CreateExerciseRequest {

    @NotBlank @Size(max = 255)
    private String name;

    @NotBlank @Size(max = 255)
    private String description;

    @Valid @NotNull @Size(min = 1, message = "{validator.message.muscleList.min.size}")
    private Set<MuscleEnum> muscleEnumList;

    @NotNull
    private ExerciseTypeEnum exerciseTypeEnum;

}
