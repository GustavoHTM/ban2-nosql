package com.gymesc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@SpringBootApplication
@EnableMongoAuditing
public class GymescApplication {

	public static void main(String[] args) {
		SpringApplication.run(GymescApplication.class, args);
	}

}
