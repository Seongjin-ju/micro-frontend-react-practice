 # React Micro-Frontend 구현 예제

react-app-rewired 를 이용한 react micro front-end 구현 예제

1. Cats, Dogs 단독으로 실행되는 각각의 React 프로젝트를 Container Application 화면 내 렌더링 하여 표출 하는 예제 

2. react-app-rewired 라이브러리를 이용하여, react에 포함된 보이지 않는 WebPack 설정을 오버라이딩(eject) 하여, 리액트 에서 기본적으로 활성화 되어 있는 코드 분할 처리를 변경
    * 코드 분할로 인한 micro front-end 의 mount, unmount 해제 문제 처리
    * dogs & cats 프로젝트 각각의 {host}/asset-manifest.json 정보 확인

3. 각각의 분할 프로젝트 내 proxy 설정 추가
    * src/setupProxy.js 내 Access-Control-Allow-Origin, * 추가

4. Dogs -> port 설정 3100
    * package.json "start": "set PORT=3100 && react-app-rewired start" 구문에서 PORT 수정 가능

5. Cats -> port 설정 3200
	* package.json "start": "set PORT=3200 && react-app-rewired start" 구문에서 PORT 수정 가능

6. Container (wrapper) -> port 설정 기본 3000 

7. Container 에서 각각의 화면 렌더링 처리를 하기위한 HOST 정보는 루트 위치 .env 파일 내 확인

8. Dogs&Cats 각각의 리액트 프로젝트를 npm i > npm run start 로 실행 시킨 뒤, Container 에서 동일하게 
실행

9. Container 프로젝트 화면 내 Dogs & Cats 화면 렌더링 확인
    * 고양이 이미지 호출 하는 사이트 API가 간혹 먹통이 되는 현상 발생.
    * 지속 현상 발생 시 다른 테스트용 API로 전환하여 테스트 진행 요함.

<br />
<br />
<p align="center"><img src="https://github.com/Seongjin-ju/micro-frontend-react-practice/assets/139413168/3987d4f4-6e5a-44d6-bda5-a5868d3d2c32" /></p>
