export default interface Query {
  startDate?: string | string[] | null;
  endDate?: string | string[] | null;
  incomeCategory?: string | string[] | null;
  expenditureCategory?: string | string[] | null;
  account?: string | string[] | null;
}
