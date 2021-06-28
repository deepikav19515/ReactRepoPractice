package com.sonata.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Payment {
	private long id;
	private long patientId;
	private String cardType;
	private String name;
	private String cardNo;
	private String expiryDate;
	private String cvv;
	
	 public Payment() {}

	public Payment(long id, long patientId, String cardType, String name, String cardNo, String expiryDate, String cvv) {
		super();
		this.id = id;
		this.patientId=patientId;
		this.cardType = cardType;
		this.name = name;
		this.cardNo = cardNo;
		this.expiryDate = expiryDate;
		this.cvv = cvv;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getPatientId() {
		return patientId;
	}

	public void setPatientId(long patientId) {
		this.patientId = patientId;
	}

	public String getCardType() {
		return cardType;
	}

	public void setCardType(String cardType) {
		this.cardType = cardType;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCardNo() {
		return cardNo;
	}

	public void setCardNo(String cardNo) {
		this.cardNo = cardNo;
	}

	public String getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(String expiryDate) {
		this.expiryDate = expiryDate;
	}

	public String getCvv() {
		return cvv;
	}

	public void setCvv(String cvv) {
		this.cvv = cvv;
	}

	@Override
	public String toString() {
		return "Payment [id=" + id + ", patientId=" + patientId + ", cardType=" + cardType + ", name=" + name
				+ ", cardNo=" + cardNo + ", expiryDate=" + expiryDate + ", cvv=" + cvv + "]";
	}
	
}
