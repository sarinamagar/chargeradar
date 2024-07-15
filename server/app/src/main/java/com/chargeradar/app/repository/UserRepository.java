package com.chargeradar.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.chargeradar.app.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{

    @Query(value = "SELECT * FROM users WHERE email = :login OR mobile = :login", nativeQuery = true)
    Optional<User> findByEmailOrMobile(String login);
}
