package com.gymesc.core.exercise.service;

import java.util.List;

import com.gymesc.core.exercise.repository.dto.ExerciseDTO;
import com.gymesc.core.exercise.request.CreateExerciseRequest;
import com.gymesc.core.exercise.request.UpdateExerciseRequest;
import com.gymesc.infrastructure.exception.BusinessException;

public interface ExerciseService {

    void createExercise(CreateExerciseRequest createExerciseRequest);

    void updateExercise(UpdateExerciseRequest updateExerciseRequest) throws BusinessException;

    void deleteExercise(String exerciseId) throws BusinessException;

    ExerciseDTO findExerciseById(String exerciseId) throws BusinessException;

    List<ExerciseDTO> listByUser(String search);

    List<ExerciseDTO> listByWorkout(String workoutId) throws BusinessException;
}
