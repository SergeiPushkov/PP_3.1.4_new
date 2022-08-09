package ru.kata.spring.boot_security.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import ru.kata.spring.boot_security.demo.form.DopUser;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserServiceImp;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AdminRestController {
    private final UserServiceImp userServiceImp;
    @Autowired
    public AdminRestController(UserServiceImp userServiceImp) {
        this.userServiceImp = userServiceImp;
    }

    @GetMapping()
    public List<User> getAllUsers() {
        return userServiceImp.findAll();
    }

    @GetMapping("{id}")
    public User getUserById(@PathVariable("id") Long id) {
        return userServiceImp.findById(id);

    }

    @PutMapping()
    public String editUser(@RequestBody DopUser user) {
        List<Role> roles = addRole(user,new User());
        User user1 = new User(user.getId(),user.getUsername(),user.getPassword(),user.getAge(),user.getEmail(),roles);
        if(user1.getPassword() != null) {
            user1.setPassword(user1.getPassword());
        }
        userServiceImp.update(user1);
        return "OK";
    }

    @PostMapping()
    public String createUser(@RequestBody DopUser user) {
        List<Role> roles = addRole(user,new User());
        User user1 = new User(user.getId(),user.getUsername(),user.getPassword(),user.getAge(),user.getEmail(),roles);

        userServiceImp.saveUser(user1);
        return "OK";
    }

    @DeleteMapping("{id}")
    public String deleteUser(@PathVariable("id") Long id) {
        userServiceImp.deleteById(id);
        return "Ok"+ id + "deleted";
    }


    public List<Role> addRole(DopUser dopUser,User user) {
        List<Role> roles = new ArrayList<>();
        Role role = new Role(1L,"ROLE_ADMIN");
        Role role2 = new Role(2L,"ROLE_USER");
        if(dopUser.getRoles().contains(role.getName())) {
            roles.add(role);
            roles.add(role2);
            user.setRoles(List.of(role,role2));
        } else {
            roles.add(role2);
            user.setRoles(List.of(role2));
        }
        return roles;
    }
}
