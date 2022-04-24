##########    Builder    ##########
FROM node:14.17.0-alpine3.13 AS builder

# 정보
LABEL maintainer="88yangkh@gmail.com"
LABEL version="1.0.0"
LABEL description="VIA 프론트엔드 애플리케이션"

# 작업 디렉토리 지정
WORKDIR /usr/src/app

# 프로젝트 의존성 추가
COPY ./package.json ./
RUN yarn

# 소스 파일 복사 : Host의 현재 디렉토리 → /usr/src/app 으로 복사
COPY . .

# React 프로젝트 빌드
RUN yarn build


##########    Running    ##########
FROM nginx:1.19.10-alpine

# 환경변수 설정
ARG NODE_ENV=prodction
ENV NODE_ENV=${NODE_ENV}

# 프론트엔드에 3000번 포트 할당
EXPOSE 3000

# 배포 모드로 실행
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY --from=builder /usr/src/app/public /usr/share/nginx/html/public