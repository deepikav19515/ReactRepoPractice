package com.sonata.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Prescription {
	private long id;
	private long patientId;
	private String observation;
	private String medicine;
	
	public Prescription() {}

	public Prescription(long pid, long patientId, String observation, String medicine) {
		super();
		this.id = id;
		this.patientId = patientId;
		this.observation = observation;
		this.medicine = medicine;
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

	public String getObservation() {
		return observation;
	}

	public void setObservation(String observation) {
		this.observation = observation;
	}

	public String getMedicine() {
		return medicine;
	}

	public void setMedicine(String medicine) {
		this.medicine = medicine;
	}

	@Override
	public String toString() {
		return "Prescription [id=" + id + ", patientId=" + patientId + ", observation=" + observation + ", medicine="
				+ medicine + "]";
	}
	
}
