package com.cife.Cife.controller;

import com.cife.Cife.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/")
@Tag(name = "회원 관리")
public class UserController {
    private final UserService userService;
    @GetMapping("/signup")
    @Operation(summary = "아이디 중복 체크", description = "아이디를 받아 DB에 존재하는 아이디인지 확인합니다.")
    public ResponseEntity<?> checkIsIdExist(@RequestParam("check_id") String checkId){
        boolean isExist = userService.checkIsIdExist(checkId);
        return ResponseEntity.ok().body(isExist);
    }
}
