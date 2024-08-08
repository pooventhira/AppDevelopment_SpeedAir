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

import com.speedair.model.Shipment;
import com.speedair.service.ShipmentService;

@RestController
@RequestMapping("/api/shipments")
public class ShipmentController {

    @Autowired
    private ShipmentService shipmentService;

    @GetMapping
    public List<Shipment> getAllShipments() {
        return shipmentService.getAllShipments();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Shipment> getShipmentById(@PathVariable Long id) {
        Shipment shipment = shipmentService.getShipmentById(id);
        if (shipment != null) {
            return ResponseEntity.ok(shipment);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Shipment createShipment(@RequestBody Shipment shipment) {
        return shipmentService.saveShipment(shipment);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Shipment> updateShipment(@PathVariable Long id, @RequestBody Shipment shipmentDetails) {
        Shipment shipment = shipmentService.getShipmentById(id);
        if (shipment != null) {
            shipment.setWeight(shipmentDetails.getWeight());
            shipment.setOrigin(shipmentDetails.getOrigin());
            shipment.setDestination(shipmentDetails.getDestination());
            shipment.setCurrentLocation(shipmentDetails.getCurrentLocation());
            shipment.setNextCheckpoint(shipmentDetails.getNextCheckpoint());
            return ResponseEntity.ok(shipmentService.saveShipment(shipment));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShipment(@PathVariable Long id) {
        if (shipmentService.getShipmentById(id) != null) {
            shipmentService.deleteShipment(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
