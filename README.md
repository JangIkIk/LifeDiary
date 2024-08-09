# 진행상황

[app]
### header
- ui/search: 검색을 눌렀을시, 태그로 등록되지 않은 문자열삭제 필요
- 레이아웃 css 다시적용 필요

### aisde
- 각버튼의 url위치 다시판단해야함
- width가 고정적이지 않아 움직임
- height 또한 짧아짐 현상

### layout
- 특정컴포넌트가 보일때, 일치하는 url판단을 다시해줘야함
- signup, loging, messageModal 사용하기 위치 이동으로인해, header 및 asied 숨겨야함

[pages]
### search
- 무한스크롤 적용 필요
- 백엔드에 디코드가 적용될수있으므로 요청직전에 디코드 적용

### login 
- 이미가입되어 있는 아이디일경우, 정상적인 리다이렉션이 되는지 확인필요
- 성공시에 권한을 같이 반환 받는 것을 고려해야함
- logo쪽 pointer 적용 필요

### signup
-  중복확인을 한이후에 버튼 비활성화하는 css 적용 필요
-  post 요청준비는 완료했지만, 테스트 해봐야함



  