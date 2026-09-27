// 새 작업물은 이 배열에 객체를 하나 더 추가하세요. 작성 방법은 README.md에 있습니다.
window.PORTFOLIO_PROJECTS = [
  {
    id: 'food-safety-api',
    badge: '개인 제작 데모 · 공개용 가상 화면',
    title: '음식점 정보 정기 수집',
    summary: '식품안전나라 공개 API의 신규·변경 정보를 날짜별 Excel로 정리하고 결과를 이메일로 알리는 데모입니다.',
    priceLabel: '예상 가격',
    price: '[미정]',
    intro: 'I1200·I2861을 조회해 13열 Excel을 만들었습니다. 반복 예약 실행과 성공·실패 테스트 메일 수신까지 확인했어요.',
    technologies: 'Python · 식품안전나라 Open API · openpyxl · Windows 작업 스케줄러 · Gmail SMTP',
    gallery: [
      { src: 'food-api-excel.png', alt: '가상 업소 정보로 재구성한 날짜별 Excel 결과 화면' },
      { src: 'food-api-success-email.png', alt: '성공 메일과 Excel 첨부를 재구성한 화면' },
      { src: 'food-api-failure-email.png', alt: '테스트 유도 실패 메일과 오류 로그 첨부를 재구성한 화면' }
    ],
    changes: [
      '신규 정보(I1200)와 변경 이력(I2861)을 기준일로 조회하고, 같은 날짜의 중복 수집을 막았습니다.',
      '두 API 중 한쪽이라도 조회에 실패하면 불완전한 Excel을 보내지 않고 오류 로그를 남깁니다.',
      '주말 결과는 보관했다가 월요일에 묶어 보내도록 구성했습니다.'
    ],
    metrics: [
      { label: '실제 API 검수', value: '신규 6행 · 변경 0행' },
      { label: '메일 검수', value: '성공·실패 각 1통 수신' },
      { label: '예약 검수', value: '5분 반복 실행 확인' }
    ],
    video: null,
    detailImage: { src: 'food-api-excel.png', alt: '13열 Excel 중 앞쪽 7열을 가상 데이터로 재구성한 화면' },
    notices: [
      '이 데모는 실제 고객 납품 사례가 아닙니다.',
      '공개 화면의 업소 정보와 메일 내용은 가상 데이터로 재구성했습니다. 실제 API 결과와 인증 정보는 공개하지 않습니다.',
      '오전 9시 정기 작업의 첫 실행과 월요일 묶음 발송은 확인 중입니다.'
    ]
  },
  {
    id: 'seasonal-order',
    badge: '개인 제작 데모 · 가상 데이터',
    title: '시즌 단가·발주 계산',
    summary: '단가와 재고를 입력하면 발주량과 예상 금액을 계산하고 결과를 보여주는 예시입니다.',
    priceLabel: '예상 가격',
    price: '[미정]',
    intro: '입력 화면에서 결과와 대시보드까지 이어지는 가상 사례입니다.',
    technologies: '스프레드시트 · 수식 · 데이터 검증',
    gallery: [
      { src: 'seasonal-dashboard.png', alt: '시즌별 발주량과 금액을 보여주는 대시보드' },
      { src: 'seasonal-input.png', alt: '제품별 단가와 재고 입력 화면' },
      { src: 'seasonal-result.png', alt: '오류 상태와 발주량 결과 화면' }
    ],
    changes: [
      'D8의 빈 단가에 29,000원 입력. P006 중복이 남아 있어 이 단계의 발주량은 그대로 0개.',
      'B8 제품코드 P006 → P008. 두 제품이 각각 발주 80개 · 2,320,000원으로 계산되어 합계가 160개 · 4,640,000원 증가.',
      'D9 단가 -59,000원 → 59,000원. P007의 발주 65개 · 3,835,000원이 합계에 추가.'
    ],
    metrics: [
      { label: '오류 행', value: '3건 → 0건' },
      { label: '총 발주량', value: '290개 → 515개' },
      { label: '예상 발주금액', value: '12,873,000원 → 21,348,000원' }
    ],
    video: {
      src: 'seasonal-demo.mp4',
      poster: 'seasonal-input.png',
      alt: '엑셀 입력 수정부터 발주 계산 결과와 대시보드까지 실제 조작한 시연 영상',
      stages: [
        { at: 0, button: '수정 전', title: '수정 전 입력', detail: 'D8 단가 누락 · P006 제품코드 중복 · D9 음수 단가' },
        { at: 12, button: '빈 단가 입력', title: 'D8 단가: 빈 값 → 29,000원', detail: 'P006 중복이 남아 있어 해당 행 발주량은 아직 0개입니다.' },
        { at: 24, button: '오류 확인', title: '수정 전 결과 확인', detail: '오류 3건 · 총 발주량 290개 · 예상 발주금액 12,873,000원' },
        { at: 42, button: '중복 코드 수정', title: 'B8 제품코드: P006 → P008', detail: '중복이 풀리며 두 제품이 각각 80개 · 2,320,000원으로 계산됩니다.' },
        { at: 55, button: '음수 단가 수정', title: 'D9 단가: -59,000원 → 59,000원', detail: 'P007의 발주량 65개 · 발주금액 3,835,000원이 추가됩니다.' },
        { at: 70, button: '최종 계산', title: '최종 계산 결과', detail: '오류 0건 · 총 발주량 515개 · 예상 발주금액 21,348,000원' },
        { at: 78, button: '대시보드', title: '대시보드에 최종 값 반영', detail: '발주량 515개 · 예상 발주금액 21,348,000원 · 오류 0건' }
      ]
    },
    detailImage: { src: 'seasonal-result.png', alt: '오류 상태와 발주량을 보여주는 계산 결과' },
    notices: [
      '이 데모는 실제 고객 납품 사례가 아닙니다.',
      '화면과 예시 결과만 공개합니다. 완성 파일은 내려받을 수 없습니다.'
    ]
  }
];
