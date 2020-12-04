import { Options } from '../select/Select';
import MultiInputDropDownHOC from './MultiInputHOC';

export const joinWithComma = (set: Set<string>, items: Options[]): string => {
  const filterItem = items.filter((curr) => set.has(curr.value as string));
  return filterItem.map((item) => item.label).join(',');
};

export default MultiInputDropDownHOC(joinWithComma);
