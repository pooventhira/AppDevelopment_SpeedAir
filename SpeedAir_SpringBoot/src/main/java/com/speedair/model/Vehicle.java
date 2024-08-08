package com.speedair.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "vehicles")
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long vehicleId;
    private String vehicleNo;
    private String type;
    private String rtoDetails;
    private Double petrolCapacity;
    private String testReport;
    private String currentLocation;
    private String status;

    @OneToOne
    @JoinColumn(name="driver_id")
    private Driver driver;
    @ManyToOne
    // @JoinColumn(name = "shipment_id")
    @JsonIgnore
    private Shipment shipment;
}

