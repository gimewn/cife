package com.cife.Cife.repository;

import com.cife.Cife.dto.UserDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class UserRepository {
    private final SqlSessionTemplate sql;
    public boolean checkIsIdExist(String checkId) {
        return sql.selectOne("User.checkIsIdExist", checkId);
    }

    public int signUp(UserDTO userDTO) {
        return sql.insert("User.signUp", userDTO);
    }
}
