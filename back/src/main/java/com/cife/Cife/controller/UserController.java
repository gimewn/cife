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

import java.util.Map;
import java.util.HashMap;

@RestController
@RequiredArgsConstructor
@RequestMapping("/")
@Tag(name = "회원 관리 API")
public class UserController {
    private final UserService userService;

    @GetMapping("/signup")
    @Operation(summary = "아이디 중복 체크", description = "아이디를 받아 DB에 존재하는 아이디인지 확인합니다.")
    public ResponseEntity<?> checkIsIdExist(@RequestParam("check_id") String checkId){
        boolean isExist = userService.checkIsIdExist(checkId);
        Map<String, Object> response = new HashMap<>();
        response.put("result", isExist);
        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/signup")
    @Operation(summary = "회원가입", description = "아이디와 비밀번호로 새로운 유저를 생성합니다.")
    public ResponseEntity<?> signUp(@RequestBody UserDTO userDTO){
        int saveResult = userService.signUp(userDTO);
        Map<String, String> response = new HashMap<>();
        String result;
        if(saveResult == 1){
            result = "success";
        }else{
            result = "fail";
        }
        response.put("result", result);
        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/login")
    @Operation(summary = "로그인", description = "아이디와 비밀번호로 기존 유저를 로그인합니다.")
    public ResponseEntity<?> login(@RequestBody UserDTO userDTO, HttpServletRequest httpServletRequest){
        Long loginResult = userService.login(userDTO);
        Map<String, String> response = new HashMap<>();
        if(loginResult == null){
            response.put("result", "fail");
            return ResponseEntity.badRequest().body(response);
        }else{
            // 로그인 성공 시 세션 설정
            HttpSession session = httpServletRequest.getSession();
            // 세션 유효 시간 : 1시간
            session.setMaxInactiveInterval(3600);
            session.setAttribute("userId", loginResult);
            response.put("result", "success");
            return ResponseEntity.ok().body(response);
        }
    }

    @GetMapping("/logout")
    @Operation(summary = "로그아웃", description = "세션을 파기하여 유저를 로그아웃합니다.")
    public ResponseEntity<?> logout(HttpServletRequest httpServletRequest){
        HttpSession httpSession = httpServletRequest.getSession();
        if(httpSession != null){
            // 세션 파기
            httpSession.invalidate();
        }
        Map<String, String> response = new HashMap<>();
        response.put("result", "success");
        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/refreshSession")
    @Operation(summary = "세션 갱신", description = "세션을 갱신하고, 기존 세션이 만료된 경우 401 에러를 반환합니다.")
    public ResponseEntity<?> refreshSession(HttpServletRequest request){
        HttpSession session = request.getSession(false);

        Map<String, String> result = new HashMap<>();

        if(session == null){
            result.put("result", "fail");
            return ResponseEntity.status(401).body(result);
        }else{
            // 유효시간 1시간 설정
            session.setMaxInactiveInterval(3600);
            result.put("result", "success");
            return ResponseEntity.ok().body(result);
        }
    }
}
