package com.speedair.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.speedair.model.Driver;
import com.speedair.repository.DriverRepository;

@Service
public class DriverService {

    @Autowired
    private DriverRepository driverRepository;

    // GetAll
    public List<Driver> getAllDrivers() {
        return driverRepository.findAll();
    }
    // GetById
    public Driver getDriverById(Long driverId) {
        return driverRepository.findById(driverId).orElse(null);
    }
    // Post
    public Driver saveDriver(Driver driver) {
        return driverRepository.save(driver);
    }
    // Delete
    public void deleteDriver(Long driverId) {
        driverRepository.deleteById(driverId);
    }
}
