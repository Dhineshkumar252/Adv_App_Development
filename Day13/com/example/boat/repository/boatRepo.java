package com.example.boat.repository;

import com.example.boat.model.boatmodel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface boatRepo extends JpaRepository<boatmodel, Long> {
    // You can add custom query methods if needed
}
