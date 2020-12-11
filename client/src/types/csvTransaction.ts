export interface CsvTransaction {
  amount: number;
  account: string;
  date: string | Date;
  memo: string;
}

export default CsvTransaction;
