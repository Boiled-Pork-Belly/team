# 🖥️ 화면 설계서 (Screen Layout Design)

`index.html`로 구현된 웹페이지의 구조를 시각화한 설계도입니다.
Excalidraw 등에서 이 구조를 참고하여 와이어프레임을 그리실 수 있습니다.

## 1. 메인 페이지 구조 (Main Page Structure)

웹페이지는 크게 **헤더(Header)**와 **팀원 목록(Member Grid)**으로 나뉩니다.

```mermaid
graph TD
    %% 스타일 정의
    classDef container fill:#f9f9f9,stroke:#333,stroke-width:2px,color:#000;
    classDef header fill:#d4e1f5,stroke:#333,stroke-width:1px,color:#000;
    classDef card fill:#ffffff,stroke:#999,stroke-width:1px,rx:10,ry:10,color:#000;
    classDef section fill:#eee,stroke:none,color:#555;

    subgraph Browser ["🌐 Web Browser Window (1000px Max Width)"]
        direction TB
        
        Header("🟦 Header Section<br/>Title: Team Flow<br/>Subtitle: 우리는 함께 성장하는 팀입니다"):::header
        
        subgraph Grid ["▦ Grid Container (Responsive: 1~3 Columns)"]
            direction LR
            
            subgraph Card1 ["Member Card 1 (Leader)"]
                direction TB
                C1_Head["Background Header (Gradient)"]:::section
                C1_Img((Profile Image)):::section
                C1_Info["Name: 김철수 (ENTJ)<br/>Role: Leader / Backend<br/>Intro: 자동화되지 않은..."]:::card
                C1_Skills["Skills: Node.js, Python"]:::section
                C1_Links["Links: Github, Blog"]:::section
            end
            
            subgraph Card2 ["Member Card 2 (Frontend)"]
                direction TB
                C2_Head["Background Header (Gradient)"]:::section
                C2_Img((Profile Image)):::section
                C2_Info["Name: 이영희 (ISFP)<br/>Role: Frontend<br/>Intro: 사용자가 머물고..."]:::card
                C2_Skills["Skills: React, TS"]:::section
                C2_Links["Links: Github, Behance"]:::section
            end
            
            subgraph Card3 ["Member Card 3 (Designer)"]
                direction TB
                C3_Head["Background Header (Gradient)"]:::section
                C3_Img((Profile Image)):::section
                C3_Info["Name: 박민수 (ENFP)<br/>Role: Designer / PM<br/>Intro: 세상에 없던..."]:::card
                C3_Skills["Skills: UX, Notion"]:::section
                C3_Links["Links: LinkedIn, Insta"]:::section
            end
        end

        Header --> Grid
    end

    class Browser container;
    class Card1,Card2,Card3 card;
```

## 2. 컴포넌트 상세 (Component Details)

각 카드는 다음과 같은 요소 배치로 구성됩니다. (Excalidraw 그리기용 가이드)

### 🪪 Member Card (카드 컴포넌트)
*   **크기**: 가로 300px 이상 (반응형으로 늘어남)
*   **배경**: 흰색 (#FFFFFF), 둥근 모서리 (Border Radius 20px)
*   **그림자**: 은은한 그림자 효과 (Box Shadow)

| 구역 (Zone) | 포함 요소 (Elements) | 스타일링 (Style) |
| :--- | :--- | :--- |
| **Top (30%)** | 그라데이션 배경 | `height: 120px`, Linear Gradient |
| **Middle (Profile)** | 원형 프로필 이미지 | `width: 100px`, 원형, 흰색 테두리 |
| **Content (Main)** | 이름, MBTI, 역할 | 이름(Big Bold), 역할(Badge Style) |
| **Body (Text)** | 한 줄 소개 | 회색 텍스트, 줄바꿈 허용 |
| **Footer (Info)** | SKILLS, PROJECTS, LINKS | 태그(Tag) 형태, 아이콘 링크 |

---
> 💡 **Tip**: Excalidraw에서 그릴 때, 큰 **사각형(Rectangle)** 안에 **원(Ellipse)**을 겹쳐서 프로필 사진을 표현하고, **작은 박스**들을 나열해 스킬 태그를 표현하면 됩니다.
