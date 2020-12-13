const { parsingTextContent } = require('@services/transaction');

describe('----------국민----------', () => {
  describe('Case 1. 승인', () => {
    test('카드명: KB국민카드\n', () => {
      expect(
        parsingTextContent(`[WEB발신]
				KB국민카드 홍길동님 06/07
				09:22 5000원
				결제 승인`),
      ).toEqual({
        cardname: 'KB',
        amount: 5000,
        date: '06/07',
        time: '09:22',
        transactionType: '승인',
        isDeposit: false,
      });
    });
  });

  describe('Case 2. 거절', () => {
    test('카드명: KB국민체크\n', () => {
      expect(
        parsingTextContent(`[Web발신]
			KB국민체크
			홍*동님
			06/08 08:57
			28,440원
			11PAY 인증
			승인취소
			`),
      ).toEqual({
        cardname: 'KB',
        amount: 28440,
        date: '06/08',
        time: '08:57',
        transactionType: '취소',
        isDeposit: true,
      });
    });
  });
});

describe('----------우리----------', () => {
  describe('Case 1. 승인', () => {
    test('카드명: 우리\n', () => {
      expect(
        parsingTextContent(`[Web발신]
			우리(8804) 체크승인
			홍*동님
			10,000원
			11/03 10:03
			스타벅스코리아`),
      ).toEqual({
        cardname: '우리',
        amount: 10000,
        date: '11/03',
        time: '10:03',
        transactionType: '승인',
        isDeposit: false,
      });
    });
  });

  describe('Case 2. 취소', () => {
    test('카드명: 우리\n', () => {
      expect(
        parsingTextContent(`[Web발신]
			우리(4575)승인취소
			홍*동님
			4562원 일시불
			12/07 20:29
			네이버페이
			누적123,456원`),
      ).toEqual({
        cardname: '우리',
        amount: 4562,
        date: '12/07',
        time: '20:29',
        transactionType: '취소',
        isDeposit: true,
      });
    });
  });
});

describe('----------농협----------', () => {
  describe('Case 1. 승인', () => {
    test('카드명: NH카드\n', () => {
      expect(
        parsingTextContent(`[Web발신]
				NH카드1*3*승인
				홍*동
				12,350원 체크
				12/06 20:37
				세븐일레븐 별나라점
				잔액222,210원`),
      ).toEqual({
        cardname: 'NH',
        amount: 12350,
        date: '12/06',
        time: '20:37',
        transactionType: '승인',
        isDeposit: false,
      });
    });
  });

  describe('Case 2. 입금', () => {
    test('카드명: 농협\n', () => {
      expect(
        parsingTextContent(`[Web발신]
				농협 입금 200원
				06/11 22:29 123-1234-4567-12
				잔액 200000원`),
      ).toEqual({
        cardname: '농협',
        amount: 200,
        date: '06/11',
        time: '22:29',
        transactionType: '승인',
        isDeposit: true,
      });
    });
  });

  describe('Case 3. 출금', () => {
    test('카드명: 농협\n', () => {
      expect(
        parsingTextContent(`농협 출금 5000원
				08/31 19:01 123-1234-1234-12
				잔액 200000원`),
      ).toEqual({
        cardname: '농협',
        amount: 5000,
        date: '08/31',
        time: '19:01',
        transactionType: '승인',
        isDeposit: false,
      });
    });
  });
});

describe('----------현대----------', () => {
  describe('Case 1. 승인', () => {
    test('카드명: 현대 ZERO\n', () => {
      expect(
        parsingTextContent(`현대 ZERO 승인
			2,500원 일시불
			04/10 13:15
			코레일유통서울지사
			누적 560,852원
			0.7%할인`),
      ).toEqual({
        cardname: '현대',
        amount: 2500,
        date: '04/10',
        time: '13:15',
        transactionType: '승인',
        isDeposit: false,
      });
    });
  });
});

describe('----------신한----------', () => {
  describe('Case 1. 승인', () => {
    test('카드명: 신한체크\n', () => {
      expect(
        parsingTextContent(`[Web발신]
				[신한체크승인] 홍*동(1234)
				02/10 13:10
				(금액)1,000원 PAYCO`),
      ).toEqual({
        cardname: '신한',
        amount: 1000,
        date: '02/10',
        time: '13:10',
        transactionType: '승인',
        isDeposit: false,
      });
    });
  });

  describe('Case 2. 출금', () => {
    test('카드명: 신한은행\n', () => {
      expect(
        parsingTextContent(`[Web발신]
				[신한은행] 09/26
				21:31:30.27
				[123-***-123456]
				지급 20,000원
				(홍길동)`),
      ).toEqual({
        cardname: '신한',
        amount: 20000,
        date: '09/26',
        time: '21:31',
        transactionType: '승인',
        isDeposit: false,
      });
    });
  });
});

describe('----------롯데----------', () => {
  describe('Case 1. 승인', () => {
    test('카드명: 롯데\n', () => {
      expect(
        parsingTextContent(`롯데1234 승인
			5,200원 일시불
			09/15 18:31
			월드크리닝 롯데마트`),
      ).toEqual({
        cardname: '롯데',
        amount: 5200,
        date: '09/15',
        time: '18:31',
        transactionType: '승인',
        isDeposit: false,
      });
    });
  });

  describe('Case 2. 승인 (쉼표가 두 번 이상 나오는 큰 숫자)', () => {
    test('카드명: 롯데\n', () => {
      expect(
        parsingTextContent(`롯데1234 승인
			1,235,200원 일시불
			09/15 18:31
			월드크리닝 롯데마트`),
      ).toEqual({
        cardname: '롯데',
        amount: 1235200,
        date: '09/15',
        time: '18:31',
        transactionType: '승인',
        isDeposit: false,
      });
    });
  });
});
