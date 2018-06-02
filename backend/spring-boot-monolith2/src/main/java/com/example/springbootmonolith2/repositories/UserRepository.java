package com.example.springbootmonolith2.repositories;

import com.example.springbootmonolith2.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

}