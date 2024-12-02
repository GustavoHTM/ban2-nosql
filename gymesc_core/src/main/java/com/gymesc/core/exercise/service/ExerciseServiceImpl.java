package com.gymesc.core.exercise.service;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.bson.types.ObjectId;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gymesc.core.exercise.repository.Exercise;
import com.gymesc.core.exercise.repository.ExerciseRepository;
import com.gymesc.core.exercise.repository.dto.ExerciseDTO;
import com.gymesc.core.exercise.request.CreateExerciseRequest;
import com.gymesc.core.exercise.request.UpdateExerciseRequest;
import com.gymesc.core.user.repository.User;
import com.gymesc.core.user.repository.UserRepository;
import com.gymesc.core.workout.repository.Workout;
import com.gymesc.core.workout.repository.WorkoutRepository;
import com.gymesc.infrastructure.exception.BusinessException;
import com.gymesc.infrastructure.exception.ExceptionHelper;
import com.gymesc.web.security.auth.UserHelper;

@Service
public class ExerciseServiceImpl implements ExerciseService {

    private WorkoutRepository workoutRepository;
    private ExerciseRepository exerciseRepository;
    private UserRepository userRepository;

    @Override
    public void createExercise(CreateExerciseRequest createExerciseRequest) {
        User user = this.userRepository.findUserById(new ObjectId(UserHelper.getUserId()));

        Exercise exercise = new ModelMapper().map(createExerciseRequest, Exercise.class);
        exercise.setAuthor(user);
        exercise.setUser(user);

        this.exerciseRepository.save(exercise);
    }

    @Override
    public void updateExercise(UpdateExerciseRequest updateExerciseRequest) throws BusinessException {
        Exercise exercise = this.exerciseRepository.findIfOwner(new ObjectId(UserHelper.getUserId()), new ObjectId(updateExerciseRequest.getId()));

        if (exercise == null) {
            throw ExceptionHelper.exerciseNotFound();
        }

        new ModelMapper().map(updateExerciseRequest, exercise);
        this.exerciseRepository.save(exercise);
    }

    @Override
    public void deleteExercise(String exerciseId) throws BusinessException {
        Exercise exercise = this.exerciseRepository.findIfOwner(new ObjectId(UserHelper.getUserId()), new ObjectId(exerciseId));
        if (exercise == null) {
            throw ExceptionHelper.exerciseNotFound();
        }

        exercise.setDeleted(true);
        this.exerciseRepository.save(exercise);
    }

    @Override
    public ExerciseDTO findExerciseById(String exerciseId) throws BusinessException {
        Exercise exercise = this.exerciseRepository.findExerciseById(new ObjectId(exerciseId));

        if (exercise == null) {
            throw ExceptionHelper.exerciseNotFound();
        }

        return new ModelMapper().map(exercise, ExerciseDTO.class);
    }

    @Override
    public List<ExerciseDTO> listByUser(String search) {
        List<Exercise> exerciseList = (StringUtils.isNotBlank(search))
            ? this.exerciseRepository.listByUserWithSearch(new ObjectId(UserHelper.getUserId()), search)
            : this.exerciseRepository.listByUserId(new ObjectId(UserHelper.getUserId()));

        return exerciseList.stream().map(exercise -> new ModelMapper().map(exercise, ExerciseDTO.class)).toList();
    }

    @Override
    public List<ExerciseDTO> listByWorkout(String workoutId) throws BusinessException {
        Workout workout = this.workoutRepository.findIfOwner(new ObjectId(UserHelper.getUserId()), new ObjectId(workoutId));

        if (workout == null) {
            throw ExceptionHelper.workoutNotFound();
        }

        return workout.getExerciseList().stream().map(exercise -> new ModelMapper().map(exercise, ExerciseDTO.class)).toList();
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
