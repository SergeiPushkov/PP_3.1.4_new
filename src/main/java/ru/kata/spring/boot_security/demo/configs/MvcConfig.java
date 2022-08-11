package ru.kata.spring.boot_security.demo.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/users").setViewName("users");
        registry.addViewController("/users/get/{id}").setViewName("users");
        registry.addViewController("/users/edit").setViewName("users");
        registry.addViewController("/users/new").setViewName("users");
        registry.addViewController("/users/delete/{id}").setViewName("users");
        registry.addViewController("/user").setViewName("user");
        registry.addViewController("/sign-in").setViewName("sign-in");
    }
}
