package com.gymesc.web.security.auth;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class UserBearerToken {

    private String id;
    private String email;
    private String firstName;

    public UserBearerToken(String id, String email, String firstName) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
    }
}