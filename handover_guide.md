# 📘 Dog Care Flow 프로젝트 인수인계서

이 문서는 **Dog Care Flow (강아지 돌봄 전문가 소개 페이지)** 프로젝트의 신규 입사자 및 협업자를 위한 가이드입니다.
노션(Notion)에 그대로 복사해서 사용하시면 됩니다.

---

## 1. 프로젝트 개요 (Project Info)
*   **프로젝트명**: Dog Care Flow
*   **목적**: 강아지 돌봄 전문가들의 프로필, 전문 기술(Specialties), 미션을 보여주는 브랜드 웹사이트
*   **현재 버전**: v1.1 (Dog Care Rebrand)
*   **배포 URL**: (Netlify 주소 입력 예정)

## 2. 기술 스택 (Tech Stack)
아주 가볍고 빠른 **Vanilla Stack**을 사용했습니다.
*   **Frontend**: HTML5, CSS3, JavaScript (ES6+)
*   **No Framework**: React나 Vue 없이 순수 코드로 작성됨 (유지보수 용이)
*   **Library**:
    *   없음 (폰트 및 아이콘은 CDN 사용)
    *   프로필 이미지: DiceBear API (자동 생성)

## 3. 파일 구조 (Structure)
```text
Team Flow
├── index.html        # 메인 페이지 (화면 레이아웃)
├── members.js        # 팀원 데이터 (이름, MBTI, 취미 등 수정은 여기서!)
├── requirements_definition.md  # 요구사항 정의서
├── collaboration_rules.md      # 협업 규칙 (Git 전략)
└── task.md           # 진행 상황 체크리스트
```

## 4. 협업 & 배포 규칙 (Workflow)
**가장 중요!** 우리 팀은 `Main` 브랜치를 엄격하게 보호합니다. 🛡️

### 🌳 브랜치 전략
1.  **`main`**: 실제 서비스되는 코드. (직접 Push 금지 🚫 / PR로만 합치기)
2.  **`develop`**: 개발 중인 코드. 여기서 자유롭게 합치고 테스트합니다.

### 👩‍💻 작업 순서 (기본 루틴)
1.  ** Clone**: `git clone [레포주소]`
2.  ** Branch**: `git checkout -b feature/내기능` (새 브랜치 따기)
3.  ** Develop**: 코드 수정하고 `git commit`
4.  ** Push**: `git push origin feature/내기능`
5.  ** PR**: 깃허브에서 `feature/내기능` ➔ `develop` (또는 `main`)으로 PR 생성
6.  ** Merge**: 팀장 승인 후 병합

## 5. 배포 가이드 (Deployment)
**Netlify**를 통해 1분 만에 자동 배포됩니다.
*   **배포 원리**: 깃허브 `main` 브랜치에 코드가 올라가면, Netlify가 감지하고 자동으로 사이트를 갱신합니다.
*   **우리가 할 일**: 그냥 `main`에 코드를 잘 합치기만 하면 끝!

## 6. 알림 설정 (Slack)
배포가 완료되면 슬랙으로 알림을 받을 수 있습니다.
*   **개별 알림 받기**: 슬랙의 **GitHub 앱**에게 아래 명령어를 DM으로 보내세요.
    ```
    /github subscribe Boiled-Pork-Belly/team deployments
    ```
*   이제 배포 성공 시 봇이 조용히 알려줍니다. 🤫

---

## 📝 주요 히스토리 (History)
*   **2026-01-28**:
    *   `PROJECTS` 항목을 `HOBBIES`로 변경 완료.
    *   3번째 멤버 이름을 "박민수" ➔ **"유니썬"**으로 수정.
    *   Netlify 배포 환경 구성 완료.

---
**문의 사항**: 팀장 (Leader) 또는 메인테이너에게 연락 주세요!
