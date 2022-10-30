# 원티드 프리온보딩 프론트엔드 11조

### [배포 사이트 바로가기](https://test.oscar0421.com/) 👈🏻 click!

1. [팀 소개](#팀-소개)
   - 팀원 소개
   - 소통 방식과 과제 진행 방식
2. [프로젝트 소개](#프로젝트-소개)
   - 프로젝트 구조
   - 폴더 구조
3. [우리 팀의 Best Practice](#우리-팀의-best-practice)

---

## 팀 소개

👋 안녕하세요, 원티드 프리온보딩 프론트엔드 11조입니다!

### 팀원 소개

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/97172050?v=4" width="100px;" alt="김영진"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/111304551?v=4" width="100px;" alt="심유선"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/34249911?v=4" width="100px;" alt="김수민"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/64957267?v=4" width="100px;" alt="용상윤"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/93130161?v=4" width="100px;" alt="이현지"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/80934175?v=4" width="100px;" alt="박채연"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/61973070?v=4" width="100px;" alt="박민주"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/104333720?v=4" width="100px;" alt="정연우"/>
    </td>
  </tr>
  <tr>    
    <td align="center">
      <a href="https://github.com/devyouth94">
        <div>김영진</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/SimYuseon">
        <div>심유선</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/hemudi">
        <div>김수민</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ryong9rrr">
        <div>용상윤(팀장)</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/HyunziLee">
        <div>이현지</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/chaechae66">
        <div>박채연</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/6mn12j">
        <div>박민주</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/0SCAR0421">
        <div>정연우</div>
      </a>
    </td>
  </tr>
</table>

### 소통 방식과 과제 진행 방식

저희 팀은 소통 방식으로 디스코드와 노션을 활용했습니다. 디스코드에서 어떤 방식이 더 나을지 투표를 하거나 어떤 코드가 좋은 코드일지 토론을 하였습니다.

토론 후 전체적인 과제 진행은 팀장이 진행하였습니다. 그리고 1명이 대표로 라이브코딩을 하고 1명이 회의록을 작성하였습니다. 나머지 팀원들은 라이브코딩에 모두 참여하여 네이밍 컨벤션이나 코드 구조 등에 대해 피드백을 주고 받으며 Best Practice를 찾기 위해 노력했습니다.

---

## 프로젝트 소개
![화면 기록 2022-10-30 23 14 04](https://user-images.githubusercontent.com/104333720/198883440-b0822994-f9c7-4cd3-a59f-385ceea26a82.gif)

- Github API를 이용한, 메인 페이지, 이슈에 대한 디테일 페이지가 존재하는 SPA 입니다. 

- 메인 페이지에 접속한 유저는 한 번에 20개의 이슈를 확인할 수 있습니다. 스크롤이 특정 엘리먼츠에 도달하면 다음 20개의 이슈를 불러옵니다.

- 디테일 페이지에 접속하면, 해당 이슈넘버에 해당하는 이슈의 디테일한 내용을 확인할 수 있습니다.

### 프로젝트 구조

- 총 2개의 페이지를 가지고 있습니다.

- 메인 페이지에서는 조건에 맞는 이슈들의 리스트를 보여줍니다.
  - open 상태, 코멘트 많은 순에 맞게 데이터 요청 및 표시합니다.
  - 해당 리스트의 제목을 클릭 시 디테일 페이지로 라우팅됩니다.

- 디테일 페이지에서는 이슈넘버에 맞는 내용을 보여줍니다.
  - 마크다운 표현을 위해 react-markdown-preview 라이브러리를 사용했습니다.

- 뒤로가기 시 사용자가 보고 있던 위치로 되돌아 갑니다.

- 유효하지 않은 요청은 Error 페이지를 보여줍니다.
  - EX) open상태가 아닌 디테일 글, 유효하지 않은 이슈넘버의 요청 등

### 폴더 구조

<details>
<summary>폴더 구조</summary>
<div markdown="1">

```
src
├── App.js
├── apis
│   └── index.js
├── components
│   ├── Error
│   │   ├── Error.styled.jsx
│   │   └── index.jsx
│   ├── IssueItem
│   │   ├── IssueItem.styled.jsx
│   │   └── index.jsx
│   ├── Layout
│   │   ├── Layout.styled.jsx
│   │   └── index.jsx
│   ├── Loading
│   │   ├── LoadingSpinner.styled.jsx
│   │   └── index.jsx
│   └── index.js
├── contexts
│   └── IssueContext.jsx
├── hooks
│   └── useInfinityScroll.jsx
├── index.css
├── index.js
├── pages
│   ├── Home
│   │   ├── Home.styled.jsx
│   │   └── index.jsx
│   ├── IssueDetail
│   │   ├── IssueDetail.styled.jsx
│   │   └── index.jsx
│   └── index.js
├── routes
│   ├── index.js
│   └── routerPaths.js
└── utils
    ├── convertDay.js
    └── index.js
```

</div>
</details>

---

## 우리 팀의 Best-Practice

### 1. 전역 상태로는 무엇이 관리되어야 할까?

📚 **이슈 목록과 로딩의 상태, 에러의 상태, 현재 불러온 페이지의 상태를 담고 있어야 합니다.**

Home 페이지는 이슈 목록을 보여주고 있습니다. 그리고 특정한 데이터 fetch기능을 통해 이슈 목록을 더 가지고 오게됩니다. 이번 프로젝트에서는 무한스크롤을 사용하여 fetch를 수행했습니다. 만약 이슈 목록이 Home 페이지가 렌더링 될 때 불러오게 된다면 사용자는 이전에 보았던 목록들을 다시 봐야하고, 이미 불러온 내용을 다시 fetch해야 할 것입니다. 이는 사용자 경험과 성능에 부정적인 영향을 미치게 된다고 생각됩니다. 따라서 모든 이슈 목록을 Context가 관리하도록 하고, 무한 스크롤로 다음 데이터를 불러오는 기능 또한 Context가 제공하도록 했습니다.

이 때, 몇 번째 페이지까지 스크롤했는지 또 다음 fetch의 트리거로 동작할 page도 가지고 있어야 합니다.

그래서 전역 상태로는 page와, 지금까지 불러온 이슈목록을 관리하는 것이 최선의 방법이라고 판단했습니다.

### 2. 상세 페이지의 데이터는 어떻게 불러와야할까?

🧐 **개발자는 사용자의 행동을 예측해야 합니다.**

개발자가 생각하는 디테일 페이지로의 접속 방법은 메인페이지의 목록 중 클릭을 통해 접속하는 방법일 것 입니다. 하지만, 이것은 개발자의 바람일뿐 브라우저 주소창에 직접 url을 입력하여 접속할수도 있습니다. 이렇게 된다면, 메인페이지를 거치지 않았기에 url에 작성된 이슈번호의 데이터가 존재함에도 사이트는 불러올 데이터가 없다는 이유로 에러페이지로 리다이렉트 시킬 것 입니다. 이는 치명적인 오류입니다.

그래서 props로 데이터를 받아 디테일 페이지를 렌더링 하는 것은 좋지 않습니다. 따라서 메인페이지의 props에 의존성을 두지 않아야합니다. 상세페이지는 url에만 의존적이도록 구현하여, 따로 api를 만들어서 데이터를 받아온 뒤 렌더링 하는 것이 가장 좋습니다.

### 3. 스크롤위치를 유지시키기 위해 따로 상태로 관리하여야 할까?

😒 **저는 뒤로가기 했을 때, 원래 보던 컨텐츠를 보고 싶다구요!**

굳이 상태로 두지 않더라도 브라우저 내부의 캐싱기능은 이를 자연스럽게 지원해줍니다. 

디테일 페이지에서 메인페이지로 뒤로가기로 돌아갔을 때 사용자가 보고있던 목록의 위치로 이동하게됩니다.

### 4. 그 외

- 팀의 코딩 스타일을 통일하기 위해 ESLint, prettier, git husky를 적극 활용하였습니다.

- 원시형 값(url 경로 등)들을 그대로 사용하는 것을 최대한 지양하고, 상수화 시켰습니다.

- 컴포넌트의 로직과 스타일링은 파일을 분리하여 작성했습니다.

- 두 페이지에서 공통으로 사용되는 Header는 별도의 Layout 컴포넌트를 작성하여 사용했습니다.
