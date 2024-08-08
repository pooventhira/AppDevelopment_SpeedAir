package com.speedair.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.speedair.model.Driver;

@Repository
public interface DriverRepository extends JpaRepository<Driver, Long> {
}
