package com.gymesc.core.user.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, ObjectId> {

    @Query("{ 'id' : ?0 }")
    User findUserById(ObjectId id);

    @Query("{ 'email' : ?0 }")
    User findByEmail(String email);

}
