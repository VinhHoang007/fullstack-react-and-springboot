package com.vinhhn11.springbootlibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vinhhn11.springbootlibrary.entity.Checkout;

public interface CheckoutRepository extends JpaRepository<Checkout, Long> {
	Checkout findByUserEmailAndBookId(String userEmail, Long bookId);
}
