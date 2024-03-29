package com.cife.Cife.service;

import com.cife.Cife.dto.UserDTO;
import com.cife.Cife.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    public boolean checkIsIdExist(String checkId) {
        return userRepository.checkIsIdExist(checkId);
    }

    public int signUp(UserDTO userDTO) {
        return userRepository.signUp(userDTO);
    }

    public Long login(UserDTO userDTO) {
        return userRepository.login(userDTO);
    }
}
