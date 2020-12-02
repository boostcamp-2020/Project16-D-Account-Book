import { observable, makeObservable, runInAction, action, computed } from 'mobx';
import Income from '../types/income';
import Expenditure from '../types/expenditure';
import { getTransactions } from '../services/transaction';
import RootStore from './RootStore';
import { filtering } from '../utils/filter';

interface Query {
  startDate: string | string[] | null;
  endDate: string | string[] | null;
  incomeCategory: string | string[] | null;
  expenditureCategory: string | string[] | null;
  account: string | string[] | null;
}

export default class TransactionStore {
  @observable transactions: Array<Income | Expenditure> = [];
  @observable isFilterMode = false;
  @observable isLoading = true;
  rootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action
  async findTransactions(accountbookId: number, startDate: Date, endDate: Date): Promise<void> {
    const transactions = await getTransactions(accountbookId, startDate, endDate);
    runInAction(() => {
      this.transactions = transactions;
      this.isLoading = false;
    });
  }

  @action
  async filterTransactions(
    accountbookId: number,
    { startDate, endDate, incomeCategory, expenditureCategory, account }: Query,
  ): Promise<void> {
    await this.findTransactions(accountbookId, new Date(startDate as string), new Date(endDate as string));
    runInAction(() => {
      this.transactions = filtering(this.transactions, { account, incomeCategory, expenditureCategory });
      this.isFilterMode = true;
      this.isLoading = false;
    });
  }
}
