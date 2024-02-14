package com.example.boat.repository;

import com.example.boat.model.appmodel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface apprepo extends JpaRepository<appmodel, Long> {
}
