package com.gymesc.core.workout.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Field;

import com.gymesc.core.base.enumeration.CategoryTypeEnum;
import com.gymesc.core.base.enumeration.WorkoutLevelEnum;
import com.gymesc.core.base.repository.BaseEntity;
import com.gymesc.core.exercise.repository.Exercise;
import com.gymesc.core.user.repository.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Workout extends BaseEntity {

    @Field("name")
    private String name;

    @Field("description")
    private String description;

    @Field("duration")
    private Integer duration;

    @Field("workout_level")
    private WorkoutLevelEnum workoutLevelEnum;

    @Field("scaling_rule")
    private String scalingRule;

    @Field("category_type_enum_list")
    private Set<CategoryTypeEnum> categoryTypeEnumList;

    @DBRef
    @Field("user_id")
    private User user;

    @DBRef
    @Field("exercise_list")
    private List<Exercise> exerciseList;
}
