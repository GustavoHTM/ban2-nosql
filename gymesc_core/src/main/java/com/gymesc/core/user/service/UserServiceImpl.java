package com.gymesc.core.user.service;

import org.apache.commons.lang3.StringUtils;
import org.bson.types.ObjectId;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gymesc.core.exercise.repository.ExerciseRepository;
import com.gymesc.core.user.repository.User;
import com.gymesc.core.user.repository.UserRepository;
import com.gymesc.core.user.repository.dto.UserDTO;
import com.gymesc.core.user.request.CreateUserRequest;
import com.gymesc.core.user.request.LoginRequest;
import com.gymesc.core.user.request.UpdateUserRequest;
import com.gymesc.core.workout.repository.WorkoutRepository;
import com.gymesc.infrastructure.Utils;
import com.gymesc.infrastructure.exception.BusinessException;
import com.gymesc.infrastructure.exception.ExceptionHelper;
import com.gymesc.infrastructure.jwt.JWTCore;
import com.gymesc.web.security.auth.UserBearerToken;
import com.gymesc.web.security.auth.UserJWTResponse;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private WorkoutRepository workoutRepository;
    private ExerciseRepository exerciseRepository;

    @Override
    public UserJWTResponse doLogin(LoginRequest loginRequest) throws BusinessException {
        User user = this.userRepository.findByEmail(loginRequest.getEmail());

        if (user == null || !user.getPassword().equals(Utils.encodePassword(loginRequest.getPassword()))) {
            throw ExceptionHelper.userNotFound();
        }

        UserBearerToken userBearerToken = new UserBearerToken(user.getId().toString(), user.getEmail(), user.getName());

        String jwt = JWTCore.USER_BEARER_IDENTIFICATION + JWTCore.parseUserBearerTokenToJWT(userBearerToken);
        UserDTO userDTO = new ModelMapper().map(user, UserDTO.class);

        return new UserJWTResponse(jwt, userDTO);
    }

    @Override
    public void  createUser(CreateUserRequest createUserRequest) throws BusinessException {
        User user = this.userRepository.findByEmail(createUserRequest.getEmail());
        if (user != null) {
            throw ExceptionHelper.emailAlreadyExist();
        }

        if (!Utils.isValidEmail(createUserRequest.getEmail())) {
            throw ExceptionHelper.invalidEmail();
        }

        String passwordProblem = Utils.validatePassword(createUserRequest.getPassword());
        if (StringUtils.isNotBlank(passwordProblem)) {
            throw new BusinessException(passwordProblem);
        }

        user = new ModelMapper().map(createUserRequest, User.class);
        user.setPassword(Utils.encodePassword(user.getPassword()));

        this.userRepository.save(user);
    }

    @Override
    public UserDTO findActiveUserDTOById(String id) {
        return this.userRepository.findById(new ObjectId(id)).map(user -> new ModelMapper().map(user, UserDTO.class)).orElse(null);
    }

    @Override
    public User findActiveUserById(String id) {
        return this.userRepository.findById(new ObjectId(id)).orElse(null);
    }

    @Override
    public UserDTO updateUser(UpdateUserRequest updateUserRequest) throws BusinessException {
        User user = this.userRepository.findById(new ObjectId(updateUserRequest.getId())).orElse(null);
        if (user == null) throw ExceptionHelper.userNotFound();

        new ModelMapper().map(updateUserRequest, user);
        this.userRepository.save(user);

        return new ModelMapper().map(user, UserDTO.class);
    }

    @Override
    public void deleteUser(String id) {
        this.exerciseRepository.listByUserId(new ObjectId(id)).forEach(exercise -> {
            exercise.setDeleted(true);
            this.exerciseRepository.save(exercise);
        });

        this.workoutRepository.listByUserId(new ObjectId(id)).forEach(workout -> {
            workout.setDeleted(true);
            this.workoutRepository.save(workout);
        });

        this.userRepository.deleteById(new ObjectId(id));
    }

    @Autowired
    private void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Autowired
    public void setWorkoutRepository(WorkoutRepository workoutRepository) {
        this.workoutRepository = workoutRepository;
    }

    @Autowired
    public void setExerciseRepository(ExerciseRepository exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }
}
