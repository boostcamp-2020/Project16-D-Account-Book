import { Options } from '../../components/inputs/Select/Select';

const isString = (target: string | string[] | undefined): target is string => {
  return typeof target == 'string';
};

const memoValue = (memo: Set<string | number>, selectValue: string[] | string | undefined): void => {
  if (isString(selectValue)) {
    memo.add(selectValue);
    return;
  }

  if (selectValue === undefined) {
    return;
  }

  selectValue.forEach((value) => {
    if (memo.has(value)) {
      throw new Error('중복된 value는 허용하지 않습니다.');
    }
    memo.add(value);
  });
};

const checkSelectValue = (memo: Set<string | number>, renderOptionData: Options[]): Options[] => {
  renderOptionData.forEach((optionData) => {
    if (memo.has(optionData.value)) {
      optionData.checked = true;
    } else {
      optionData.checked = false;
    }
  });

  return renderOptionData;
};

export const createRenderData = (options: Options[], selectValue: string | string[] | undefined): Options[] => {
  const memoSelectValue = new Set<string | number>();
  const renderedData = options.map((option) => ({ ...option }));
  memoValue(memoSelectValue, selectValue);
  checkSelectValue(memoSelectValue, renderedData);
  return renderedData;
};
