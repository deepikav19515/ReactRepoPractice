package com.sonata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sonata.Model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

}
