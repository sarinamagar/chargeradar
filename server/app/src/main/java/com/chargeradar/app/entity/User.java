package com.chargeradar.app.entity;

import java.sql.Date;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import io.micrometer.common.lang.NonNull;
import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.val;
import jakarta.persistence.GenerationType;

@Entity
@Data
@Table(name = "user")
public class User implements UserDetails{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Nonnull
    private String email;

    @Nonnull
    private String fullname;

    @NonNull
    private String password;

    @Nonnull
    private Date joined;

    @Nonnull
    private String role;

    @Nonnull
    private String mobile;

    @OneToMany(mappedBy = "owner")
    @JsonManagedReference(value = "user-station")
    private List<Station> stations;

    @OneToMany(mappedBy = "reviewer")
    private List<Review> reviews;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
       SimpleGrantedAuthority authority = new SimpleGrantedAuthority(this.role);
       return Collections.singletonList(authority);
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
