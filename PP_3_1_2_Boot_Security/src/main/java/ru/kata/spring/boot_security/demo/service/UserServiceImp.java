package ru.kata.spring.boot_security.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.repository.RoleRepository;
import ru.kata.spring.boot_security.demo.repository.UserRepository;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Service
public class UserServiceImp implements UserService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Autowired
    public UserServiceImp(@Lazy PasswordEncoder passwordEncoder, UserRepository userRepository, RoleRepository roleRepository) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;

    }

    public User findById(Long id) {
        return userRepository.getById(id);
    }



    public List<User> findAll(){
        return new ArrayList<>(userRepository.findAll());
    }


    @Transactional
    public void saveUser(User user) {
        Set<Role> roles = findByRoleName(user.getRoles().toString());
        user.setRoles(roles);
        if(user.getPassword() != null) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        userRepository.save(user);
    }

    @Override
    @Transactional
    public void update(User upUser) {
        Set<Role> roles = findByRoleName(upUser.getRoles().toString());
        if(upUser.getRoles().toString().contains("ROLE_ADMIN")){
            upUser.setRoles(getAllRoles());
        } else {
            upUser.setRoles(roles);
        }
        if(upUser.getPassword() != null) {
            upUser.setPassword(upUser.getPassword());
        }
        userRepository.save(upUser);
    }

    public void deleteById(long id) {
        userRepository.deleteById(id);
    }


    public User findByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }


    public Set<Role> getAllRoles() {
        return new HashSet<>(roleRepository.findAll());
    }



    @Override
    public Set<Role> findByRoleName(String role) {
        Set<Role> roles = new HashSet<>();
        for (Role roleName : getAllRoles()) {
            if (role.contains(roleName.getName())) {
               roles.add(roleName);
            }   
        }
        return roles;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("Not found user");
        }

        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
                user.getAuthorities());
    }
}
