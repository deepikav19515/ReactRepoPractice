package com.sonata.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.Model.Payment;
import com.sonata.repository.PaymentRepository;



//@CrossOrigin(origins="http://localhost:4200")
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/form")
public class PaymentController {

	 @Autowired
	    private PaymentRepository pr;
	 
	 @GetMapping("/getpay")
	    public List<Payment> getAllPayment(){
	        return pr.findAll();
	    }
	 
	 @PostMapping("/postpay")
	    public Payment createPrescription(@RequestBody Payment pay) {
	        return pr.save(pay);
	    }
}
