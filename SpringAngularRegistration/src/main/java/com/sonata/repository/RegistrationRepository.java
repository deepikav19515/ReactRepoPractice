package com.sonata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sonata.Model.Registration;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Long> {

}
