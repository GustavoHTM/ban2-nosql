package com.gymesc.core.user.service;


import com.gymesc.core.user.repository.User;
import com.gymesc.core.user.repository.dto.UserDTO;
import com.gymesc.core.user.request.CreateUserRequest;
import com.gymesc.core.user.request.LoginRequest;
import com.gymesc.core.user.request.UpdateUserRequest;
import com.gymesc.infrastructure.exception.BusinessException;
import com.gymesc.web.security.auth.UserJWTResponse;

public interface UserService {

    UserJWTResponse doLogin(LoginRequest loginRequest) throws BusinessException;

    void createUser(CreateUserRequest createUserRequest) throws BusinessException;

    UserDTO findActiveUserDTOById(String id);

    User findActiveUserById(String id);

    UserDTO updateUser(UpdateUserRequest updateUserRequest) throws BusinessException;

    void deleteUser(String id);

}
