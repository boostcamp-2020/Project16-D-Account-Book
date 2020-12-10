export interface IInputRadio {
  name: string;
  left: {
    id: string;
    value: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
  };
  right: {
    id: string;
    value: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
  };
}

export const startDateChecker: IInputRadio = {
  name: 'startDay',
  left: {
    id: 'sunday',
    value: 'sunday',
    checked: true,
    label: '일요일',
  },
  right: {
    id: 'monday',
    value: 'monday',
    label: '월요일',
  },
};

export const graphChangeChecker: IInputRadio = {
  name: 'graphChange',
  left: {
    id: 'pie',
    value: 'pie',
    label: '카테고리별 지출',
  },
  right: {
    id: 'line',
    value: 'line',
    label: '일별 지출',
  },
};
