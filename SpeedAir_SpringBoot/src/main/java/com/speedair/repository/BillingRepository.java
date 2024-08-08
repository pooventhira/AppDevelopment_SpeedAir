package com.speedair.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.speedair.model.Billing;

@Repository
public interface BillingRepository extends JpaRepository<Billing, Long> {
}
