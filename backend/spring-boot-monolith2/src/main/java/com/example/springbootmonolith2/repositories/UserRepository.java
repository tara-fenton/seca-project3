package com.example.springbootmonolith2.repositories;

import com.example.springbootmonolith2.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
    public List<User> findAllByOrderByIdAsc();
}