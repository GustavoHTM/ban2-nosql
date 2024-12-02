package com.gymesc.core.workout.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface WorkoutRepository extends MongoRepository<Workout, ObjectId> {

    @Query("{ 'id' : ?0, 'deleted' : false }")
    Workout findWorkoutById(ObjectId id);

    @Query("{ 'user.id' : ?0, 'deleted' : false }")
    List<Workout> listByUserId(ObjectId userId);

    @Query("{ 'user.id' : ?0, '$or' : [ { 'name' : { '$regex' : ?1, '$options' : 'i' } }, { 'description' : { '$regex' : ?1, '$options' : 'i' } } ], 'deleted' : false }")
    List<Workout> listByUserWithSearch(ObjectId userId, String search);

    @Query("{ 'user.id' : ?0, 'id' : ?1, 'deleted' : false }")
    Workout findIfOwner(ObjectId userId, ObjectId id);
}