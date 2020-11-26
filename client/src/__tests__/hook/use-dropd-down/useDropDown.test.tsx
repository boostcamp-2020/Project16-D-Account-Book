import { createRenderData } from '../../../hook/use-drop-down';
import dummyOptions from '../../../__dummy-data__/components/inputs/dummyOptions';

describe('드랍다운 훅스 테스트', () => {
  describe('createRenderData 함수 테스트', () => {
    test('selected에 선택된 값에만 checked=true 되어야한다.', () => {
      const test: string[] = ['optionLabel6', 'optionLabel7'];
      const output = createRenderData(dummyOptions, test);
      let counter = 0;
      output.forEach((out) => {
        if (out.checked) {
          counter++;
        }
      });
      expect(counter).toBe(2);
    });

    test('selected 값은 단일 값으로도 올 수 있다.', () => {
      const test = 'optionLabel6';
      const output = createRenderData(dummyOptions, test);
      let counter = 0;
      output.forEach((out) => {
        if (out.checked) {
          counter++;
        }
      });
      expect(counter).toBe(1);
    });

    test('selected에 중복된 값이 오면 에러를 던진다.', () => {
      expect(() => {
        const test: string[] = ['throwErrorzz', 'throwErrorzz'];
        createRenderData(dummyOptions, test);
      }).toThrow();
    });
  });
});
