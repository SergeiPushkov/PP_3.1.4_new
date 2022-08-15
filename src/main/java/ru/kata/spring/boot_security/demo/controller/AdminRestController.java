package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserServiceImp;

import java.security.Principal;
import java.util.List;


@RestController
@RequestMapping("/api")
public class AdminRestController {
    private final UserServiceImp userServiceImp;
    @Autowired
    public AdminRestController(UserServiceImp userServiceImp) {
        this.userServiceImp = userServiceImp;
    }


    @GetMapping("/user")
    public ResponseEntity<User> sayUsers(Principal principal) {
        System.out.println(principal);
        System.out.println(principal);
        System.out.println(principal);
        System.out.println(principal);
        return new ResponseEntity<>(userServiceImp.findByUsername(principal.getName()),HttpStatus.OK);
    }
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userServiceImp.findAll(), HttpStatus.OK);
    }

    @GetMapping("/users/get/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(userServiceImp.findById(id),HttpStatus.OK);
    }

    @PutMapping("/users/edit")
    public ResponseEntity<User> editUser(@RequestBody User user) {
        userServiceImp.update(user);
       return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @PostMapping("/users/new")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        userServiceImp.saveUser(user);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @DeleteMapping("/users/delete/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable("id") Long id) {
        userServiceImp.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
