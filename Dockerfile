##########    Builder    ##########
FROM node:14.17.0-alpine3.13 as builder

# 정보
LABEL maintainer="88yangkh@gmail.com"
LABEL version="1.0.0"
LABEL description="VIA 프론트엔드 애플리케이션"

# 환경변수 설정
ARG NODE_ENV=prodction
ENV NODE_ENV=${NODE_ENV}
ARG REACT_APP_IMP_MERCHANT_ID
ENV REACT_APP_IMP_MERCHANT_ID=${REACT_APP_IMP_MERCHANT_ID}
ARG REACT_APP_KAKAO_JS_KEY
ENV REACT_APP_KAKAO_JS_KEY=${REACT_APP_KAKAO_JS_KEY}

# 작업 디렉토리 지정
WORKDIR /usr/src/app

# 프로젝트 의존성 추가
COPY package.json yarn.lock ./
COPY tsconfig.json tsconfig-for-webpack-config.json ./
RUN yarn

# React 프로젝트 빌드
COPY . .
RUN yarn build


##########    Running    ##########
FROM nginx:1.19.10-alpine as production

# 프론트엔드에 3000번 포트 할당
EXPOSE 3000

# 배포 모드로 실행
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY --from=builder /usr/src/app/public /usr/share/nginx/html/public