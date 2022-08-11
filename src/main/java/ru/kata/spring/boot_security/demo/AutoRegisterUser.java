package ru.kata.spring.boot_security.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.kata.spring.boot_security.demo.repository.RoleRepository;
import ru.kata.spring.boot_security.demo.service.UserServiceImp;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;

import javax.annotation.PostConstruct;
import java.util.HashSet;
import java.util.Set;

@Component
public class AutoRegisterUser {
    private final UserServiceImp userServiceImp;
    private final RoleRepository roleRepository;
    @Autowired
    public AutoRegisterUser(UserServiceImp userServiceImp, RoleRepository roleRepository) {
        this.userServiceImp = userServiceImp;
        this.roleRepository = roleRepository;
    }


    @PostConstruct
    void AutoSaveUser() {
        Set<Role> adminRole = new HashSet<>();
        Set<Role> userRole = new HashSet<>();
        Role role_admin = new Role(1L,"ROLE_ADMIN");
        Role role_user = new Role(2L,"ROLE_USER");
        roleRepository.save(role_admin);
        roleRepository.save(role_user);
        adminRole.add(role_admin);
        adminRole.add(role_user);
        userRole.add(role_user);

        User user_admin = new User("admin","admin",25,"admin@mail.ru");
        User user_user = new User("user", "user", 20, "user@mail.ru");
        

        user_admin.setRoles(adminRole);
        user_user.setRoles(userRole);

        userServiceImp.saveUser(user_admin);
        userServiceImp.saveUser(user_user);

    }
}
