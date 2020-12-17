const cardName = ['삼성카드', '국민카드', '농협카드', '우리카드', '신한카드'];
const color = ['#1E90FF', '#0048BA', '#B0BF1A', '#7CB9E8', '#C9FFE5'];
const created_at = ['2020-11-23', '2020-11-24', '2020-11-25', '2020-11-26', '2020-11-27'];

const createBulkAccountData = () => {
  let id = 0;
  const bulkdData = cardName.map((item, index) => {
    id += 1;
    return {
      id,
      name: item,
      color: color[index],
      deleted_at: null,
      accountbook_id: 1,
      created_at: created_at[index],
      updated_at: created_at[index],
    };
  });

  const bulkdData2 = cardName.map((item, index) => ({
    id: ++id,
    name: item,
    color: color[index],
    deleted_at: null,
    accountbook_id: 2,
    created_at: created_at[index],
    updated_at: created_at[index],
  }));

  const bulkdData3 = cardName.map((item, index) => ({
    id: ++id,
    name: item,
    color: color[index],
    deleted_at: null,
    accountbook_id: 3,
    created_at: created_at[index],
    updated_at: created_at[index],
  }));
  return [...bulkdData, ...bulkdData2, ...bulkdData3];
};

module.exports = {
  createBulkAccountData,
};
