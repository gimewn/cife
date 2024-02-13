package com.cife.Cife.controller;

import com.cife.Cife.dto.CultureDTO;
import com.cife.Cife.dto.ReservedDateDTO;
import com.cife.Cife.repository.CultureRepository;
import com.cife.Cife.service.CultureService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
@RequestMapping("/culture")
@Tag(name = "문화생활 관리 API")
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
    @PostMapping
    @Operation(summary = "문화생활 등록", description = "문화생활을 등록합니다.")
    public ResponseEntity<?> postCulture(@RequestBody CultureDTO cultureDTO, @SessionAttribute Long userId){
        cultureDTO.setUserId(userId);
        int saveResult = cultureService.postCulture(cultureDTO);

        Map<String, String> response = new HashMap<>();

        if(saveResult >= 1){
            response.put("result", "success");
            return ResponseEntity.ok().body(response);
        }else{
            response.put("result", "fail");
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PutMapping
    @Operation(summary = "문화생활 수정", description = "특정 문화생활을 수정합니다.")
    public ResponseEntity<?> updateCulture(@RequestParam Long cultureId, @SessionAttribute Long userId, @RequestBody CultureDTO cultureDTO){
        Map<String, String> response = new HashMap<>();

        if(!checkCultureAuth(cultureId, userId)){
            response.put("result", "해당 유저가 등록한 문화생활이 아닙니다.");
            return ResponseEntity.status(403).body(response);
        }

        if(!cultureService.checkIsExistCategory(cultureDTO.getCategoryId())){
            response.put("result", "존재하는 카테고리가 아닙니다.");
            return ResponseEntity.badRequest().body(response);
        }

        cultureDTO.setCultureId(cultureId);
        cultureDTO.setUserId(userId);

        int updateResult = cultureService.updateCulture(cultureDTO);



        if(updateResult >= 1){
            response.put("result", "success");
            return ResponseEntity.ok().body(response);
        }else{
            response.put("result", "fail");
            return ResponseEntity.badRequest().body(response);
        }
    }

    @DeleteMapping
    @Operation(summary = "문화생활 삭제", description = "문화생활을 삭제합니다.")
    public ResponseEntity<?> deleteCulture(@RequestParam Long cultureId, @SessionAttribute Long userId){
        if(!checkCultureAuth(cultureId, userId)){
            return ResponseEntity.status(403).body("해당 유저가 등록한 문화생활이 아닙니다.");
        }
        int deleteResult = cultureService.deleteCulture(cultureId);

        Map<String, String> response = new HashMap<>();

        if(deleteResult >= 1){
            response.put("result", "success");
            return ResponseEntity.ok().body(response);
        }else{
            response.put("result", "fail");
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping
    @Operation(summary = "특정 문화생활 조회", description = "특정 문화생활을 조회합니다.")
    public ResponseEntity<?> getCultureOne(@RequestParam Long cultureId, @SessionAttribute Long userId){

        if(!checkCultureAuth(cultureId, userId)){
            return ResponseEntity.status(403).body("해당 유저가 등록한 문화생활이 아닙니다.");
        }

        CultureDTO cultureDTO = cultureService.getCultureOne(cultureId);

        Map<String, Object> response = new HashMap<>();

        if(cultureDTO != null) {
            response.put("result", cultureDTO);
            return ResponseEntity.ok().body(response);
        }else{
            response.put("result", "해당하는 문화생활이 존재하지 않습니다.");
            return ResponseEntity.ok().body(response);
        }
    }
    @GetMapping("/all")
    @Operation(summary = "문화생활 목록 조회", description = "특정 유저가 등록한 문화생활 목록을 조회합니다.")
    public ResponseEntity<?> getCultureList(@SessionAttribute Long userId){
        List<CultureDTO> getResult = cultureService.getCultureList(userId);

        Map<String, Object> response = new HashMap<>();

        if(getResult != null){
            response.put("result", getResult);
            return ResponseEntity.ok().body(response);
        }else{
            response.put("result", "해당 유저의 문화생활 목록이 존재하지 않습니다.");
            return ResponseEntity.ok().body("해당 유저의 문화생활 목록이 존재하지 않습니다.");
        }
    }

    @PatchMapping("/reservation")
    @Operation(summary = "예매일 수정", description = "특정 문화생활의 예매일을 수정합니다.")
    public ResponseEntity<?> patchReservedDate(@RequestParam Long cultureId, @SessionAttribute Long userId, @RequestBody ReservedDateDTO reservedDateDTO){

        Map<String, String> response = new HashMap<>();

        if(!checkCultureAuth(cultureId, userId)){
            response.put("result", "해당 유저가 등록한 문화생활이 아닙니다.");
            return ResponseEntity.status(403).body(response);
        }

        Map<String, Object> patchParam = new HashMap<>();

        patchParam.put("cultureId", cultureId);
        patchParam.put("date", reservedDateDTO.getDate());

        int patchResult = cultureService.updateReservedDate(patchParam);

        if(patchResult >= 1){
            response.put("result", "success");
            return ResponseEntity.ok().body(response);
        }else{
            response.put("result", "fail");
            return ResponseEntity.ok().body(response);
        }
    }

    @DeleteMapping("/reservation")
    @Operation(summary = "예매일 삭제", description = "특정 문화생활의 예매일을 삭제합니다.")
    public ResponseEntity<?> deleteReservedDate(@RequestParam Long cultureId, @SessionAttribute Long userId){

        Map<String, String> response = new HashMap<>();

        if(!checkCultureAuth(cultureId, userId)){
            response.put("result", "해당 유저가 등록한 문화생활이 아닙니다.");
            return ResponseEntity.status(403).body(response);
        }
        Map<String, Object> patchParam = new HashMap<>();

        patchParam.put("cultureId", cultureId);
        patchParam.put("date", null);

        int patchResult = cultureService.updateReservedDate(patchParam);

        if(patchResult >= 1){
            response.put("result", "success");
            return ResponseEntity.ok().body(response);
        }else{
            response.put("result", "fail");
            return ResponseEntity.ok().body(response);
        }
    }
}
