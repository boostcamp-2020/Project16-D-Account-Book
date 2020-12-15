## 공동 가계부 관리 서비스, M.O.A

<div align="center">

<img src="https://i.imgur.com/7hUyD13.png" width=300/>

[![GitHub Open Issues](https://img.shields.io/github/issues-raw/boostcamp-2020/Project16-D-Account-Book?color=green)](https://github.com/boostcamp-2020/Project16-D-Account-Book/issues)
[![GitHub Closed Issues](https://img.shields.io/github/issues-closed-raw/boostcamp-2020/Project16-D-Account-Book?color=red)](https://github.com/boostcamp-2020/Project16-D-Account-Book/issues)
[![GitHub Open PR](https://img.shields.io/github/issues-pr-raw/boostcamp-2020/Project16-D-Account-Book?color=green)](https://github.com/boostcamp-2020/Project16-D-Account-Book/issues)
[![GitHub Closed PR](https://img.shields.io/github/issues-pr-closed-raw/boostcamp-2020/Project16-D-Account-Book?color=red)](https://github.com/boostcamp-2020/Project16-D-Account-Book/issues)

</div>
<br><br><br>

## 프로젝트 소개 💸

> **_Manage Our Accountbook!_**

개인의 입출금 및 가계 재정을 시각화하고 분석할 수 있을 뿐만 아니라 공동 가계부까지 관리할 수 있는 웹 서비스입니다.

<br><br><br>

## 배포 Link :exclamation:

[http://moa.r-e.kr/](http://moa.r-e.kr/)
> - Chrome을 사용해주세요.
> 
> - 현재 네이버 로그인은 서비스 검수 요청 중에 있습니다. 카카오 로그인을 사용해주세요.

<br><br><br>

## 팀원 소개 👨🏻‍💻

| <img src="https://user-images.githubusercontent.com/26829633/99659625-76bc7f00-2aa4-11eb-8dd3-5e9999988e9e.png" width=300/> | <img src="https://i.imgur.com/317zpAr.jpg" width=300/> | <img src="https://i.imgur.com/NfOU5Jv.jpg" width=300/> | <img src="https://i.imgur.com/BXyyWrF.png" width=300/> |
| :-------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------: | :----------------------------------------------------: | :----------------------------------------------------: |
|                                                         J004 강민수                                                         |                      J009 고병화                       |                      J045 김영근                       |                      J131\_윤현우                      |
|                                            [@mu1616](https://github.com/mu1616)                                             |        [@bbbyung2](https://github.com/bbbyung2)        |        [@lacomaco](https://github.com/lacomaco)        |         [@Mong-Gu](https://github.com/Mong-Gu)         |

<br><br><br>

## 기술 스택 🛠

> 선정 이유가 궁금하다면 [**여기**](https://www.notion.so/158a594255e243d396b841adeb329c35)로!

<div align="center">
  <img src="https://i.imgur.com/udWMf33.png"/>
</div>
<br><br><br>

## 사용 방법 :computer:

1. 레포지토리를 클론하고자 하는 디렉토리에서 아래 명령어를 수행

   ```
   git clone https://github.com/boostcamp-2020/Project16-D-Account-Book.git
   ```

<br>

2. 클론한 디렉토리에서 server 디렉토리로 들어가 아래 명령어를 통해 server에서 필요한 module 설치

   ```
   npm i
   ```

<br>

3. server에서 필요한 `dotenv` 설정

- `server/.env.example`을 open
- 아래 설명에 따라 환경변수 설정

  ```
  # SERVER/CLIENT HOST&PORT
  SERVER_HOST=[백엔드 서버 HOST]
  SERVER_PORT=[백엔드 서버 PORT]
  CLIENT_HOST=[클라이언트 서버 HOST]
  CLIENT_PORT=[클라이언트 서버 PORT]

  # DB
  DB_HOST=[데이터베이스 서버 HOST]
  DB_PORT=[데이터베이스 서버 PORT]
  DB_USERNAME=[MySQL 로그인 시 이용하는 유저명]
  DB_PASSWORD=[MySQL 로그인 시 이용하는 비밀번호]
  DB_DATABASE=[사용하고자 하는 데이터베이스명]

  # OAUTH
  NAVER_CLIENT_ID=[네이버 Application Client ID]
  NAVER_CLIENT_SECRET=[네이버 Applicaiotn Client Secret]
  KAKAO_CLIENT_ID=[카카오 Application Client ID]
  KAKAO_CLIENT_SECRET=[카카오 Applicaiotn Client Secret]

  # JWT
  JWT_SECRET_KEY=[JWT 발급 시 사용할 Secret Key]
  JWT_EXPIRES_IN=[JWT 만료시간]

  # COOKIE
  COOKIE_EXPIRES_IN=[Cookie 만료시간]
  ```

  > NAVER 혹은 Kakao Application이 존재하지 않을 경우 로그인을 할 수 없습니다.<br>Application을 등록하려면 아래 사이트를 참고바랍니다.<br><br>- [NAVER Developers](https://developers.naver.com/apps/#/list)<br> - [Kakao Developers](https://developers.kakao.com/console/app)

<br>

4. 클론한 디렉토리에서 client 디렉토리로 들어가 아래 명령어를 통해 client에서 필요한 module 설치

   ```
   npm i
   ```

<br>

5. client에서 필요한 `dotenv` 설정

- `client/.env.example`을 open
- 아래 설명에 따라 환경변수 설정

  ```
  # SERVER
  REACT_APP_BASE_URL=[API를 호출할 백엔드 서버 URL]

  # OAUTH
  REACT_APP_NAVER_CLIENT_ID=[네이버 Application Client ID]
  REACT_APP_NAVER_CLIENT_SECRET=[네이버 Applicaiotn Client Secret]
  REACT_APP_NAVER_CALLBACK_URL=[네이버 로그인을 위한 Callback URL]
  REACT_APP_KAKAO_CLIENT_ID=[카카오 Application Client ID]
  REACT_APP_KAKAO_CLIENT_SECRET=[카카오 Applicaiotn Client Secret]
  REACT_APP_KAKAO_CALLBACK_URL=[카카오 로그인을 위한 Callback URL]
  ```

<br>

6. (데이터베이스 서버가 켜져있다고 가정하고) 두 개의 터미널을 가동한 후, 각 터미널에서 다음의 절차 수행

- [터미널1] `server` 디렉토리로 이동 후 아래 명령어 수행

  ```
  npm run start
  ```

- [터미널2] `client` 디렉토리로 이동 후 아래 명령어 수행
  ```
  npm run start
  ```
