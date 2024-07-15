package com.chargeradar.app.entity;

import java.sql.Date;
import java.sql.Time;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "station")
public class Station {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Nonnull
    private String name;

    @Nonnull
    private String address;

    @Nonnull
    private Integer reviewCount;
    
    @Nonnull
    private Float rating;

    @Nonnull
    private Time openingTime;

    @Nonnull 
    private Time closingTime;

    @Nonnull
    private Date addedDate;

    @Nonnull
    private Float longitude;

    @Nonnull
    private Float latitude;

    @Nonnull
    private Float maxSpeed;

    @ManyToOne
    @JoinColumn(name = "ownerID")
    @JsonBackReference(value = "user-station")
    private User owner;

    @OneToMany(mappedBy = "station")
    private List<Review> reviews;
    
    @OneToMany(mappedBy = "station")
    private List<Images> images;

    @OneToOne(mappedBy = "station")
    private Amenities amenities;

    @ManyToMany
    @JoinTable(name = "station_chargerType",
                joinColumns =  { @JoinColumn(name = "station")},
                inverseJoinColumns = { @JoinColumn(name = "chargerType")}
    )
    private Set<ChargerType> chargerType;
}  

