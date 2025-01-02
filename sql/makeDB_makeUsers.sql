CREATE DATABASE doctorgreen;

USE doctorgreen;

CREATE TABLE Users (
    Id VARCHAR(255) NOT NULL PRIMARY KEY,  -- 사용자 아이디 (영어 문자열, 고유 값)
    Password VARCHAR(255) NOT NULL,        -- 비밀번호
    Name VARCHAR(255) NOT NULL,            -- 사용자 닉네임
    Email VARCHAR(255) NOT NULL,           -- 사용자 이메일
    Subscribe BOOLEAN DEFAULT FALSE,       -- 구독 여부
    Subscribe_start_date DATE,             -- 구독 시작 날짜
    Subscribe_grade VARCHAR(50),           -- 구독 등급
    Jwt VARCHAR(255) NOT NULL              -- 토큰
);