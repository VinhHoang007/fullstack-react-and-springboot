package com.vinhhn11.springbootlibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vinhhn11.springbootlibrary.entity.Checkout;

import java.util.List;

public interface CheckoutRepository extends JpaRepository<Checkout, Long> {
    Checkout findByUserEmailAndBookId(String userEmail, Long bookId);

    List<Checkout> findBooksByUserEmail(String userEmail);
}
