package com.sonata.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sonata.Model.Prescription;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long>{

}
