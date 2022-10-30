# 보일러 플레이트

## Lint rules

- lint error 발생 시 커밋이 되지 않습니다.
- `console.log`, `var`, `==` 등을 사용했는지 한번 확인해보세요.

## 경로 별칭

`@` 사용으로 경로 별칭을 사용할 수 있습니다.

`IssueList` 컴포넌트와 루트 경로의 `craco.config.js` 파일을 통해서 확인해보세요.

## Getting Started

### 1. `template` 브런치로 들어옵니다.

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b47f4ecf-4506-4916-828c-14bd524eae2d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-10-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.48.26.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221029T095321Z&X-Amz-Expires=86400&X-Amz-Signature=5f48b5c68c082e1b2bf4e59c796fc4098376560bb79589febd2f436427d3438b&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-10-29%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25206.48.26.png%22&x-id=GetObject" />

### 2. 자신의 깃허브 아이디를 적고 `Create branch` 를 눌러서 자신의 브런치를 생성합니다.

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/35daeb70-59c7-4c76-b132-e8878d899af0/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-10-29_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.48.42.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221029T095428Z&X-Amz-Expires=86400&X-Amz-Signature=ea7b0870090497d2d54f9a5452ed81f93e86eae7b68c12158442f88a9dd502e8&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-10-29%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25206.48.42.png%22&x-id=GetObject" />

### 3. 이 repository를 클론합니다.

`git clone ...`

### 4. 자신의 브런치로 이동합니다.

`git switch 자신의 깃허브 아이디`

만약 브런치가 없다고 하면 `git remote update` 명령어를 먼저 수행해주세요.

### 5. 자신의 브런치로 잘 이동을 하였다면 작업을 시작해주세요!

`npm install`

- `IssueList` 컴포넌트 등 필요없는 코드는 지우셔도 됩니다.
