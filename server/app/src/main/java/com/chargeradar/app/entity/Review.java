package com.chargeradar.app.entity;

import java.util.List;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "review")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Nonnull
    private String reviewText;

    @Nonnull
    private Integer rating;

    @ManyToOne
    @JoinColumn(name = "stationID")
    private Station station;

    @ManyToOne
    @JoinColumn(name = "reviewerID")
    private User reviewer;
} 
