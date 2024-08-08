package com.speedair.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.speedair.model.Driver;
import com.speedair.service.DriverService;

@RestController
@RequestMapping("/api/drivers")
public class DriverController {

    @Autowired
    private DriverService driverService;

    @GetMapping
    public List<Driver> getAllDrivers() {
        return driverService.getAllDrivers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Driver> getDriverById(@PathVariable Long id) {
        Driver driver = driverService.getDriverById(id);
        if (driver != null) {
            return ResponseEntity.ok(driver);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Driver createDriver(@RequestBody Driver driver) {
        return driverService.saveDriver(driver);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Driver> updateDriver(@PathVariable Long id, @RequestBody Driver driverDetails) {
        Driver driver = driverService.getDriverById(id);
        if (driver != null) {
            driver.setName(driverDetails.getName());
            driver.setEmail(driverDetails.getEmail());
            driver.setContact(driverDetails.getContact());
            driver.setPickupLocation(driverDetails.getPickupLocation());
            driver.setDeliveryLocation(driverDetails.getDeliveryLocation());
            return ResponseEntity.ok(driverService.saveDriver(driver));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDriver(@PathVariable Long id) {
        if (driverService.getDriverById(id) != null) {
            driverService.deleteDriver(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
