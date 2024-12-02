package com.gymesc.core.workout.service;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.bson.types.ObjectId;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gymesc.core.base.request.DomainIdRequest;
import com.gymesc.core.exercise.repository.Exercise;
import com.gymesc.core.exercise.repository.ExerciseRepository;
import com.gymesc.core.user.repository.User;
import com.gymesc.core.user.repository.UserRepository;
import com.gymesc.core.workout.repository.Workout;
import com.gymesc.core.workout.repository.WorkoutRepository;
import com.gymesc.core.workout.repository.dto.WorkoutDTO;
import com.gymesc.core.workout.request.CreateWorkoutRequest;
import com.gymesc.core.workout.request.UpdateWorkoutRequest;
import com.gymesc.infrastructure.exception.BusinessException;
import com.gymesc.infrastructure.exception.ExceptionHelper;
import com.gymesc.web.security.auth.UserHelper;

@Service
public class WorkoutServiceImpl implements WorkoutService {

    private WorkoutRepository workoutRepository;

    private ExerciseRepository exerciseRepository;

    private UserRepository userRepository;

    @Override
    public void createWorkout(CreateWorkoutRequest createWorkoutRequest) {
        User user = this.userRepository.findUserById(new ObjectId(UserHelper.getUserId()));

        Workout workout = new ModelMapper().map(createWorkoutRequest, Workout.class);
        workout.setUser(user);

        if (createWorkoutRequest.getExerciseList() != null) {
            List<ObjectId> exerciseIdList = createWorkoutRequest.getExerciseList().stream().map(domainIdRequest -> new ObjectId(domainIdRequest.getId())).toList();
            List<Exercise> exerciseList = exerciseRepository.findAllById(exerciseIdList);

            workout.setExerciseList(exerciseList);
        }

        if (workout.getWorkoutLevelEnum() == null) {
            workout.setWorkoutLevelEnum(user.getWorkoutLevelEnum());
        }

        this.workoutRepository.save(workout);
    }

    @Override
    public void updateWorkout(UpdateWorkoutRequest updateWorkoutRequest) throws BusinessException {
        Workout workout = this.workoutRepository.findIfOwner(new ObjectId(UserHelper.getUserId()), new ObjectId(updateWorkoutRequest.getId()));

        if (workout == null) {
            throw ExceptionHelper.workoutNotFound();
        }

        new ModelMapper().map(updateWorkoutRequest, workout);
        this.workoutRepository.save(workout);
    }

    @Override
    public void deleteWorkout(String workoutId) throws BusinessException {
        Workout workout = this.workoutRepository.findIfOwner(new ObjectId(UserHelper.getUserId()), new ObjectId(workoutId));
        if (workout == null) {
            throw ExceptionHelper.workoutNotFound();
        }

        workout.setDeleted(true);
        this.workoutRepository.save(workout);
    }

    @Override
    public WorkoutDTO findById(String workoutId) throws BusinessException {
        Workout workout = this.workoutRepository.findWorkoutById(new ObjectId(workoutId));

        if (workout == null) {
            throw ExceptionHelper.workoutNotFound();
        }

        return new ModelMapper().map(workout, WorkoutDTO.class);
    }

    @Override
    public List<WorkoutDTO> listByUser(String search) {
        List<Workout> workoutList = (StringUtils.isNotBlank(search))
            ? this.workoutRepository.listByUserWithSearch(new ObjectId(UserHelper.getUserId()), search)
            : this.workoutRepository.listByUserId(new ObjectId(UserHelper.getUserId()));

        return workoutList.stream().map(workout -> new ModelMapper().map(workout, WorkoutDTO.class)).toList();
    }

    @Autowired
    public void setWorkoutRepository(WorkoutRepository workoutRepository) {
        this.workoutRepository = workoutRepository;
    }

    @Autowired
    public void setExerciseRepository(ExerciseRepository exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
