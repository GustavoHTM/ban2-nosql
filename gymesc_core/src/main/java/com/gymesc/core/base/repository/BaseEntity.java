package com.gymesc.core.base.repository;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Getter;
import lombok.Setter;

@Getter
@Document
public abstract class BaseEntity {

    @Setter
    @Id
    @Field("_id")
    protected ObjectId id;

    @Setter
    @Field("deleted")
    protected boolean deleted = false;

    @CreatedDate
    @Field("createDate")
    protected LocalDateTime createDate;

    @LastModifiedDate
    @Field("lastEdit")
    protected LocalDateTime lastEdit = LocalDateTime.now();
}
