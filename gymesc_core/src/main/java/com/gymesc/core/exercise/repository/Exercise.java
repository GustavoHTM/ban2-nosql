package com.gymesc.core.exercise.repository;

import java.util.Set;

import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Field;

import com.gymesc.core.base.enumeration.MuscleEnum;
import com.gymesc.core.base.repository.BaseEntity;
import com.gymesc.core.exercise.repository.enumeration.ExerciseTypeEnum;
import com.gymesc.core.user.repository.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Exercise extends BaseEntity {

    @Field("name")
    private String name;

    @Field("description")
    private String description;

    @Field("exercise_type")
    private ExerciseTypeEnum exerciseTypeEnum;

    @Field("muscle_enum_list")
    private Set<MuscleEnum> muscleEnumList;

    @DBRef
    @Field("user_id")
    private User user;

    @DBRef
    @Field("author_id")
    private User author;
}
