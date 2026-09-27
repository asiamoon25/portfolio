# 포트폴리오 게시 방법

이 폴더의 `index.html`이 GitHub Pages의 첫 화면입니다. 작업물의 글과 이미지 경로는 `portfolio-data.js`에서 관리합니다. 사이트를 수정할 때 별도 빌드나 서버가 필요하지 않습니다.

`실무에서 해온 일`은 `index.html`의 `id="experience"` 섹션에서 직접 수정합니다. 회사 프로젝트는 재직 중 수행한 업무로 표시하고, 공개 허락을 받지 않은 내부 화면·소스·데이터는 올리지 않습니다.

## 새 작업물 추가

1. 공개해도 되는 완성 작업의 화면 이미지 3장을 이 저장소의 최상위 폴더에 업로드합니다. 파일명은 영문과 숫자, 하이픈을 사용하면 경로를 다루기 쉽습니다.
2. GitHub에서 `portfolio-data.js`를 열고 편집 버튼을 누릅니다. `window.PORTFOLIO_PROJECTS = [` 안의 기존 객체를 복사해 쉼표로 구분한 다음, 새 객체의 값을 수정합니다.
3. `id`는 다른 작업물과 겹치지 않게 정하고, `gallery`의 `src`에는 올린 이미지 파일명을 적습니다. 화면에 보이는 설명은 `title`, `summary`, `intro`, `technologies`에서 수정합니다.
4. 시연 영상이 없으면 `video: null`, 계산 수치가 없으면 `metrics: []`, 작업 과정 설명이 없으면 `changes: []`로 둡니다. `detailImage`에는 크게 볼 이미지 1장을 지정합니다.
5. 개인 제작물은 `badge`에 **개인 제작 데모**라고 쓰고, 가상 데이터라면 그 사실도 적습니다. 실제 납품 사례는 고객의 공개 허락을 받은 정보만 적습니다. 가격은 확인된 금액만 쓰고, 정하지 않았다면 `[미정]`을 유지합니다.
6. 변경 내용을 커밋하면 Pages가 다시 배포됩니다. 공개 사이트에서 이미지, 상세 화면, 링크를 확인합니다.

새 객체 예시:

```js
{
  id: 'new-project',
  badge: '개인 제작 데모 · 가상 데이터',
  title: '작업물 제목',
  summary: '목록에서 보여줄 한 줄 설명',
  priceLabel: '예상 가격',
  price: '[미정]',
  intro: '상세 화면의 짧은 소개',
  technologies: '사용 기술',
  gallery: [
    { src: 'new-main.png', alt: '대표 화면 설명' },
    { src: 'new-input.png', alt: '입력 화면 설명' },
    { src: 'new-result.png', alt: '결과 화면 설명' }
  ],
  changes: [],
  metrics: [],
  video: null,
  detailImage: { src: 'new-result.png', alt: '결과 화면 설명' },
  notices: ['이 데모는 실제 고객 납품 사례가 아닙니다.']
}
```

실제 고객 자료, 계약 금액, 화면은 공개 허락을 확인하기 전에는 저장소에 넣지 않습니다. 시연용 엑셀 파일도 이 저장소에 포함하지 않았습니다.
