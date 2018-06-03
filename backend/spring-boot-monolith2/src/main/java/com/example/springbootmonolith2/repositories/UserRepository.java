package com.example.springbootmonolith2.repositories;

import com.example.springbootmonolith2.models.User;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<User, Long> {

}