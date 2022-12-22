package com.vinhhn11.springbootlibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vinhhn11.springbootlibrary.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
