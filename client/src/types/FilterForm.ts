export interface IFilterForm {
  dateRange?: string | undefined;
  payment?: string[] | undefined;
  incomeCategories: string[] | undefined;
  expenditureCategories: string[] | undefined;
}

export interface IFilterFormChange {
  dateRange: (e: string) => void;
  payment: (e: string) => void;
  incomeCategories: (e: string[]) => void;
  expenditureCategories: (e: string[]) => void;
}

export enum FilterFormAction {
  DATE_RANGE_ACTION,
  PAYMENT_ACTION,
  INCOME_CATEGORIES_ACTION,
  EXPENDITURE_CATEGORIES_ACTION,
}

export interface DATE_RANGE_CHANGE {
  type: FilterFormAction.DATE_RANGE_ACTION;
  data: string | undefined;
}

export interface PAYMENT_CHANGE {
  type: FilterFormAction.PAYMENT_ACTION;
  data: string | undefined;
}

export interface INCOME_CATEGORIES_CHANGE {
  type: FilterFormAction.INCOME_CATEGORIES_ACTION;
  data: string | undefined;
}

export interface EXPENDITURE_CATEGORIES_CHANGE {
  type: FilterFormAction.EXPENDITURE_CATEGORIES_ACTION;
  data: string | undefined;
}
