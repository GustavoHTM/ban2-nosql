package com.gymesc.core.workout.service;

import java.util.List;

import com.gymesc.core.workout.repository.dto.WorkoutDTO;
import com.gymesc.core.workout.request.CreateWorkoutRequest;
import com.gymesc.core.workout.request.UpdateWorkoutRequest;
import com.gymesc.infrastructure.exception.BusinessException;

public interface WorkoutService {

    void createWorkout(CreateWorkoutRequest createWorkoutRequest) throws BusinessException;

    void updateWorkout(UpdateWorkoutRequest updateWorkoutRequest) throws BusinessException;

    void deleteWorkout(String workoutId) throws BusinessException;

    WorkoutDTO findById(String workoutId) throws BusinessException;

    List<WorkoutDTO> listByUser(String search) throws BusinessException;

}
