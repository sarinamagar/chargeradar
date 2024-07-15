package com.chargeradar.app.entity;

import io.micrometer.common.lang.NonNull;
import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "")
public class Amenities {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private Boolean wifi;

    @NonNull
    private Boolean parking;

    @NonNull
    private Boolean food;

    @NonNull
    private Boolean washroom;

    @NonNull
    private Boolean accessibility;

    @NonNull
    private Boolean shopping;

    @OneToOne
    @JoinColumn(name = "stationID")
    private Station station;
}

