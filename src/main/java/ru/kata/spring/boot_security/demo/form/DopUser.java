package ru.kata.spring.boot_security.demo.form;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class DopUser {
    private Long id;
    private String username;
    private String password;
    private String email;
    private int age;
    private String roles;
}