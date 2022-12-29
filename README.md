# My Color Palette

<img width="921" alt="스크린샷 2022-10-15 오후 5 13 24" src="https://user-images.githubusercontent.com/52883505/195977155-eedfbe7d-ed46-4800-b9af-24eeac2e7b29.png">

<img width="1513" alt="스크린샷 2022-10-15 오후 5 13 46" src="https://user-images.githubusercontent.com/52883505/195977168-a2061eac-934a-421d-8e6e-76c615b2635d.png">

## Weekly Clone Coding

Part 3 of [Weekly Clone Coding Challenge](https://github.com/namiein/weekly-clone-coding)

## Project Description

Clone Coding Color Palette Generator

## v1.0.0 (2022.10.09 ~ 2022.10.15)

-   색상을 보여주는 메인 페이지 (홈)
    -   png 다운로드
-   Palette를 생성할 수 있는 페이지 (등록)
    -   기본 색상 Color Picker
    -   Neutral Color Picker (검정 <-> 흰색)
    -   비슷한 색상을 보여주기
    -   선택한 색상의 opacity 보여주기
    -   Palette 이름 생성하기
    -   초기화, 선택, 저장 기능
    -   선택한 색상 변경하기

## v1.0.1 (TO-BE)

## Folder Structure

```
.
├── app
│   └── App.tsx
├── components
│   ├── create
│   │   ├── DefaultColorPalette.tsx
│   │   ├── Form.tsx
│   │   ├── NeutralColorPalette.tsx
│   │   ├── OpacityColorPalette.tsx
│   │   ├── PalettePreview.tsx
│   │   ├── SimilarColorPalette.tsx
│   │   └── index.ts
│   └── home
│       └── ColorsList.tsx
├── index.tsx
├── pages
│   ├── Create.tsx
│   └── Home.tsx
├── react-app-env.d.ts
 gykim  ~/Documents/workspaces/private/my-color-palette/src   main ±  tree .
.
├── app
│   └── App.tsx
├── components
│   ├── ColorsList
│   │   ├── index.tsx
│   │   └── types.ts
│   ├── DefaultColorPalette
│   │   ├── index.tsx
│   │   └── types.ts
│   ├── Form
│   │   ├── index.tsx
│   │   └── types.ts
│   ├── NeutralColorPalette
│   │   ├── index.tsx
│   │   └── types.ts
│   ├── OpacityColorPalette
│   │   ├── index.tsx
│   │   └── types.ts
│   ├── PalettePreview
│   │   ├── index.tsx
│   │   └── types.ts
│   ├── SimilarColorPalette
│   │   ├── index.tsx
│   │   └── types.ts
│   └── index.ts
├── index.tsx
├── pages
│   ├── Create
│   │   └── index.tsx
│   └── Home
│       └── index.tsx
├── react-app-env.d.ts
├── routes
│   └── index.tsx
├── styles
│   └── index.css
└── utils
    └── index.ts
```

## NPM Packages

-   React v18 + TypeScript
-   react-router-dom v6
-   html2canvas
-   tailwindcss

## Code Convention

-   ESLint - AirBnB
-   Prettier
