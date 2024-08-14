package com.speedair.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
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
    @Column(nullable = false)
    private String vehicleNo;
    @Column(nullable = false)
    private String type;
    @Column(nullable = false)
    private String rtoDetails;
    @Column(nullable = false)
    private String testReport;
    private Double petrolCapacity;
    private String currentLocation;
    private String status;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="driver_id")
    private Driver driver;
    @ManyToOne
    @JoinColumn(name = "shipment_id", unique = false)
    @JsonBackReference
    private Shipment shipment;
}
