package com.gymesc.core.exercise.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ExerciseRepository extends MongoRepository<Exercise, ObjectId> {

    @Query("{ 'id' : ?0, 'deleted' : false }")
    Exercise findExerciseById(ObjectId id);

    @Query("{ 'user.id' : ?0, 'deleted' : false }")
    List<Exercise> listByUserId(ObjectId userId);

    @Query("{ 'user.id' : ?0, '$or' : [ { 'name' : { '$regex' : ?1, '$options' : 'i' } }, { 'description' : { '$regex' : ?1, '$options' : 'i' } } ], 'deleted' : false }")
    List<Exercise> listByUserWithSearch(ObjectId userId, String search);

    @Query("{ 'user.id' : ?0, 'id' : ?1, 'deleted' : false }")
    Exercise findIfOwner(ObjectId userId, ObjectId id);
}
