package com.cife.Cife.controller;

import com.cife.Cife.dto.UserDTO;
import com.cife.Cife.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/signup")
    @Operation(summary = "회원가입", description = "아이디와 비밀번호로 새로운 유저를 생성합니다.")
    public ResponseEntity<?> signUp(@RequestBody UserDTO userDTO){
        int saveResult = userService.signUp(userDTO);
        String result;
        if(saveResult == 1){
            result = "success";
        }else{
            result = "fail";
        }
        return ResponseEntity.ok().body(result);
    }
}
