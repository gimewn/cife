package com.cife.Cife.repository;

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
}
