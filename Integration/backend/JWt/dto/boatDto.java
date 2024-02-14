// package com.example.boat.dto;

// public class jobdto {

//     private String jobtitle;
//     private String jobdescription;
//     private double jobsalary;
//     private String gender;
//     private String location;
//     private String jobtype;
//     private int experience;
//     private String imageurl;

//     // Add getters and setters here

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
package com.example.boat.dto;

public class boatDto {

    private Long id;
    private String boatName;
    private String boatDescription;
    private int capacity;
    private String imageurl;
    private String phone;
    private String boataddress;
    private boolean availableStatus;
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

    public String getImageurl(){
        return imageurl;
    }
    public void setImageurl(String imageurl){
        this.imageurl=imageurl;
    }
    public String getBoataddress() {
        return boataddress;
    }
    public void setBoataddress(String boataddress) {
        this.boataddress = boataddress;
    }

}
