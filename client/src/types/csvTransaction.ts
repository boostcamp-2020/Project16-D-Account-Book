export interface CsvTransaction {
  id: number;
  amount: number;
  account: string;
  date: string | Date;
  memo: string;
}

export default CsvTransaction;
