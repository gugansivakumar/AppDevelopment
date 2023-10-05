package com.crudoperation.EmartCRUD.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.crudoperation.EmartCRUD.Entity.UserEntity;
import com.crudoperation.EmartCRUD.Repository.UserRepository;

@RestController
public class UserController {
    @Autowired
    UserRepository repository;

    @PostMapping("/adduser")
    public UserEntity addUser(@RequestBody UserEntity entity) {
        return repository.save(entity);
    }

    @GetMapping("/users")
    public List<UserEntity> UserList() {
        return repository.findAll();
    }

    @PutMapping("/update")
    public UserEntity update(@RequestBody UserEntity entity) {
        return repository.saveAndFlush(entity);
    }

    @DeleteMapping("/delete/{id}") 
    public String delete(@PathVariable Long id) {
        repository.deleteById(id);
        return "User with ID " + id + " is deleted";
    }
}
