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

import com.speedair.model.Vehicle;
import com.speedair.service.VehicleService;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @GetMapping
    public List<Vehicle> getAllVehicles() {
        return vehicleService.getAllVehicles();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable Long id) {
        Vehicle vehicle = vehicleService.getVehicleById(id);
        if (vehicle != null) {
            return ResponseEntity.ok(vehicle);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Vehicle createVehicle(@RequestBody Vehicle vehicle) {
        return vehicleService.saveVehicle(vehicle);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Vehicle> updateVehicle(@PathVariable Long id, @RequestBody Vehicle vehicleDetails) {
        Vehicle vehicle = vehicleService.getVehicleById(id);
        if (vehicle != null) {
            vehicle.setVehicleNo(vehicleDetails.getVehicleNo());
            vehicle.setType(vehicleDetails.getType());
            vehicle.setRtoDetails(vehicleDetails.getRtoDetails());
            vehicle.setDriver(vehicleDetails.getDriver());
            vehicle.setPetrolCapacity(vehicleDetails.getPetrolCapacity());
            vehicle.setTestReport(vehicleDetails.getTestReport());
            vehicle.setCurrentLocation(vehicleDetails.getCurrentLocation());
            vehicle.setStatus(vehicleDetails.getStatus());
            return ResponseEntity.ok(vehicleService.saveVehicle(vehicle));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVehicle(@PathVariable Long id) {
        if (vehicleService.getVehicleById(id) != null) {
            vehicleService.deleteVehicle(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
