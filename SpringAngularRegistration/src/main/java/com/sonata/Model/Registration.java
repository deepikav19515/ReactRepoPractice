package com.sonata.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Registration {
    private long id;
    private String name;
    private String dname;
    private long did;
    private String contact;
    private String location;
    private String username;
    private String password;
    private String confirmpassword;
    private String Adate;
    private String Hhistory;
    private String Chistory;
    
    public Registration() {}
    public Registration(long id, String name, String dname,long did,String contact, String location, String username, String password,
			String confirmpassword, String adate, String hhistory, String chistory) {
		super();
		this.id = id;
		this.name = name;
		this.dname = dname;
		this.did = did;
		this.contact = contact;
		this.location = location;
		this.username = username;
		this.password = password;
		this.confirmpassword = confirmpassword;
		this.Adate = adate;
		this.Hhistory = hhistory;
		this.Chistory = chistory;
	}

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDname() {
		return dname;
	}
	public void setDname(String dname) {
		this.dname = dname;
	}
	public long getDid() {
		return did;
	}
	public void setDid(long did) {
		this.did = did;
	}
	public String getContact() {
        return contact;
    }
    public void setContact(String contact) {
        this.contact = contact;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getConfirmpassword() {
        return confirmpassword;
    }
    public void setConfirmpassword(String confirmpassword) {
        this.confirmpassword = confirmpassword;
    }
    
    public String getAdate() {
		return Adate;
	}
	public void setAdate(String adate) {
		Adate = adate;
	}
	
	public String getHhistory() {
		return Hhistory;
	}
	public void setHhistory(String hhistory) {
		Hhistory = hhistory;
	}
	public String getChistory() {
		return Chistory;
	}
	public void setChistory(String chistory) {
		Chistory = chistory;
	}
	@Override
	public String toString() {
		return "Registration [id=" + id + ", name=" + name + ", dname=" + dname + ", did=" + did + ", contact="
				+ contact + ", location=" + location + ", username=" + username + ", password=" + password
				+ ", confirmpassword=" + confirmpassword + ", Adate=" + Adate + ", Hhistory=" + Hhistory + ", Chistory="
				+ Chistory + "]";
	}
	
	
	
}