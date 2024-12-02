package com.gymesc.core.user.repository;

import org.springframework.data.mongodb.core.mapping.Field;

import com.gymesc.core.base.enumeration.WorkoutLevelEnum;
import com.gymesc.core.base.repository.BaseEntity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User extends BaseEntity {

    @Field("email")
    private String email;

    @Field("password")
    private String password;

    @Field("name")
    private String name;

    @Field("phone_number")
    private String phoneNumber;

    @Field("federal_identification")
    private String federalIdentification;

    @Field("weight")
    private Double weight;

    @Field("height")
    private Integer height;

    @Field("workout_level")
    private WorkoutLevelEnum workoutLevelEnum;
}
