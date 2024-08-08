package com.speedair.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.speedair.model.Shipment;
import com.speedair.repository.ShipmentRepository;

@Service
public class ShipmentService {

    @Autowired
    private ShipmentRepository shipmentRepository;

    public List<Shipment> getAllShipments() {
        return shipmentRepository.findAll();
    }

    public Shipment getShipmentById(Long shipmentId) {
        return shipmentRepository.findById(shipmentId).orElse(null);
    }
    
    public Shipment saveShipment(Shipment shipment) {
        return shipmentRepository.save(shipment);
    }

    public void deleteShipment(Long shipmentId) {
        shipmentRepository.deleteById(shipmentId);
    }
}
