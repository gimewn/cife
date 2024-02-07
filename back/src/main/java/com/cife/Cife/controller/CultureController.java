package com.cife.Cife.controller;

import com.cife.Cife.dto.CultureDTO;
import com.cife.Cife.repository.CultureRepository;
import com.cife.Cife.service.CultureService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.valves.rewrite.RewriteCond;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;

@Controller
@RequiredArgsConstructor
@RequestMapping("/culture")
@Tag(name = "문화생활 관리")
public class CultureController {
    private final CultureService cultureService;

    public Boolean checkCultureAuth(Long cultureId, Long userId){
        Long cultureWriter = cultureService.getCultureWriter(cultureId);

        if(cultureWriter != userId){
            return false;
        }else{
            return true;
        }
    }
    @PostMapping("/")
    @Operation(summary = "문화생활 등록", description = "문화생활을 등록합니다.")
    public ResponseEntity<?> postCulture(@RequestBody CultureDTO cultureDTO, @SessionAttribute Long userId){
        cultureDTO.setUserId(userId);
        int saveResult = cultureService.postCulture(cultureDTO);

        if(saveResult >= 1){
            return ResponseEntity.ok().body("success");
        }else{
            return ResponseEntity.badRequest().body("fail");
        }
    }

    @PutMapping("/")
    @Operation(summary = "문화생활 수정", description = "특정 문화생활을 수정합니다.")
    public ResponseEntity<?> updateCulture(@RequestParam("culture_id") Long cultureId, @SessionAttribute Long userId, @RequestBody CultureDTO cultureDTO){

        if(!checkCultureAuth(cultureId, userId)){
            return ResponseEntity.status(403).body("해당 유저가 등록한 문화생활이 아닙니다.");
        }

        cultureDTO.setCultureId(cultureId);
        cultureDTO.setUserId(userId);

        int updateResult = cultureService.updateCulture(cultureDTO);

        if(updateResult >= 1){
            return ResponseEntity.ok().body("success");
        }else{
            return ResponseEntity.badRequest().body("fail");
        }
    }

    @DeleteMapping("/")
    @Operation(summary = "문화생활 삭제", description = "문화생활을 삭제합니다.")
    public ResponseEntity<?> deleteCulture(@RequestParam Long cultureId, @SessionAttribute Long userId){
        if(!checkCultureAuth(cultureId, userId)){
            return ResponseEntity.status(403).body("해당 유저가 등록한 문화생활이 아닙니다.");
        }
        int deleteResult = cultureService.deleteCulture(cultureId);

        if(deleteResult >= 1){
            return ResponseEntity.ok().body("success");
        }else{
            return ResponseEntity.badRequest().body("fail");
        }
    }

    @GetMapping("/")
    @Operation(summary = "특정 문화생활 조회", description = "특정 문화생활을 조회합니다.")
    public ResponseEntity<?> getCultureOne(@RequestParam Long cultureId, @SessionAttribute Long userId){

        if(!checkCultureAuth(cultureId, userId)){
            return ResponseEntity.status(403).body("해당 유저가 등록한 문화생활이 아닙니다.");
        }

        CultureDTO cultureDTO = cultureService.getCultureOne(cultureId);

        System.out.println("cultureDTO = " + cultureDTO);

        if(cultureDTO != null) {
            return ResponseEntity.ok().body(cultureDTO);
        }else{
            return ResponseEntity.badRequest().body("해당하는 문화생활이 존재하지 않습니다.");
        }
    }
}
