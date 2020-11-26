import MultiInputDropDownHOC from '../multi-input-dropdown/MultiInputHOC';

const createPlaceHolderName = (set: Set<string>): string => {
  return set.size + '개 결제수단';
};

export default MultiInputDropDownHOC(createPlaceHolderName);
