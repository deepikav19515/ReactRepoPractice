package com.sonata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sonata.Model.DoctorLog;

@Repository
public interface DoctorLogRepository extends JpaRepository<DoctorLog, Long> {

}
