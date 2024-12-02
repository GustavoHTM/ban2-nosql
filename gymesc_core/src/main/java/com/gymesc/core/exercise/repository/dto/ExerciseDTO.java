package com.gymesc.core.exercise.repository.dto;

import java.util.Set;

import com.gymesc.core.base.enumeration.MuscleEnum;
import com.gymesc.core.exercise.repository.enumeration.ExerciseTypeEnum;
import com.gymesc.core.user.repository.dto.UserDTO;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ExerciseDTO {

    private String id;

    private String name;

    private String description;

    private Set<MuscleEnum> muscleEnumList;

    private UserDTO user;

    private UserDTO author;

    private ExerciseTypeEnum exerciseTypeEnum;

}
