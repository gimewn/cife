package com.cife.Cife.controller;

import com.cife.Cife.dto.UserDTO;
import com.cife.Cife.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.Name;

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

    @PostMapping("/login")
    @Operation(summary = "로그인", description = "아이디와 비밀번호로 기존 유저를 로그인합니다.")
    public ResponseEntity<?> login(@RequestBody UserDTO userDTO, HttpServletRequest httpServletRequest){
        Long loginResult = userService.login(userDTO);
        if(loginResult == null){
            return ResponseEntity.badRequest().body("fail");
        }else{
            // 로그인 성공 시 세션 설정
            HttpSession session = httpServletRequest.getSession();
            // 세션 유효 시간 : 1시간
            session.setMaxInactiveInterval(3600);
            session.setAttribute("userId", loginResult);
            return ResponseEntity.ok().body("success");
        }
    }

    @GetMapping("/logout")
    @Operation(summary = "로그아웃", description = "세션을 파기하여 유저를 로그아웃합니다.")
    public ResponseEntity<?> logout(HttpServletRequest httpServletRequest){
        HttpSession httpSession = httpServletRequest.getSession();
        if(httpSession != null){
            // 세션 파기
            httpSession.invalidate();
        }else{
            System.out.println("엥 세션이 없다");
        }
        return ResponseEntity.ok().body("로그아웃 완료");
    }
}
