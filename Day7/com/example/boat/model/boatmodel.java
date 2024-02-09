// package com.example.boat.model;

// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.Table;

// @Entity
// @Table(name = "job_details")
// public class jobmodel {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @Column(name = "jobtitle", nullable = false)
//     private String jobtitle;

//     @Column(name = "jobdescription", nullable = false)
//     private String jobdescription;

//     @Column(name = "jobsalary", nullable = false)
//     private double jobsalary;

//     @Column(name = "gender")
//     private String gender;

//     @Column(name = "location")
//     private String location;

//     @Column(name = "jobtype")
//     private String jobtype;

//     @Column(name = "experience")
//     private int experience;

//     @Column(name = "imageurl")
//     private String imageurl;

//     // Add getters and setters here

//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public String getJobtitle() {
//         return jobtitle;
//     }

//     public void setJobtitle(String jobtitle) {
//         this.jobtitle = jobtitle;
//     }

//     public String getJobdescription() {
//         return jobdescription;
//     }

//     public void setJobdescription(String jobdescription) {
//         this.jobdescription = jobdescription;
//     }

//     public double getJobsalary() {
//         return jobsalary;
//     }

//     public void setJobsalary(double jobsalary) {
//         this.jobsalary = jobsalary;
//     }

//     public String getGender() {
//         return gender;
//     }

//     public void setGender(String gender) {
//         this.gender = gender;
//     }

//     public String getLocation() {
//         return location;
//     }

//     public void setLocation(String location) {
//         this.location = location;
//     }

//     public String getJobtype() {
//         return jobtype;
//     }

//     public void setJobtype(String jobtype) {
//         this.jobtype = jobtype;
//     }

//     public int getExperience() {
//         return experience;
//     }

//     public void setExperience(int experience) {
//         this.experience = experience;
//     }

//     public String getImageurl() {
//         return imageurl;
//     }

//     public void setImageurl(String imageurl) {
//         this.imageurl = imageurl;
//     }
// }
package com.example.boat.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "boat_details")
public class boatmodel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "boat_name", nullable = false)
    private String boatName;

    @Column(name = "boat_description", nullable = false)
    private String boatDescription;

    @Column(name = "capacity", nullable = false)
    private int capacity;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "no_of_persons", nullable = false)
    private int noOfPersons;

    @Column(name = "available_status", nullable = false)
    private boolean availableStatus;

    @Column(name = "price", nullable = false)
    private double price;

    // Add getters and setters here

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBoatName() {
        return boatName;
    }

    public void setBoatName(String boatName) {
        this.boatName = boatName;
    }

    public String getBoatDescription() {
        return boatDescription;
    }

    public void setBoatDescription(String boatDescription) {
        this.boatDescription = boatDescription;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getNoOfPersons() {
        return noOfPersons;
    }

    public void setNoOfPersons(int noOfPersons) {
        this.noOfPersons = noOfPersons;
    }

    public boolean isAvailableStatus() {
        return availableStatus;
    }

    public void setAvailableStatus(boolean availableStatus) {
        this.availableStatus = availableStatus;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
