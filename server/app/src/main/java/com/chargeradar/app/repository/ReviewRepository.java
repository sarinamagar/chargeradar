package com.chargeradar.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chargeradar.app.entity.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review,Long>{

    
} 
