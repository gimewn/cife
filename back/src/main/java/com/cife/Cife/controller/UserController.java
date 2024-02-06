package com.cife.Cife.controller;

import com.cife.Cife.service.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequiredArgsConstructor
@RequestMapping("/")
public class UserController {
    private final UserService userService;
    @GetMapping("/signup")
    public ResponseEntity<?> checkIsIdExist(@RequestParam("check_id") String checkId){
        boolean isExist = userService.checkIsIdExist(checkId);
        return ResponseEntity.ok().body(isExist);
    }
}
