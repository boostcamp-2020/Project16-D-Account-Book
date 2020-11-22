import React from 'react';
import PieGraphSVG from './PieGraph';

export default {
  component: PieGraphSVG,
  title: 'PieGraphSVG',
}

const Template = args => <PieGraphSVG {...args} />;

export const Default = Template.bind({});

Default.args = {
  transactionData:
    [{ title: '상품', color: 'green', ratio: 20 },
    { title: '토마토', color: 'tomato', ratio: 30 },
    { title: '물', color: 'blue', ratio: 10 },
    { title: '닷져블루', color: 'dodgerblue', ratio: 40 }]
};

const Small = args => <div style={{
  width: "200px",
  height: "200px",
}}><PieGraphSVG {...args} /></div>;

export const SmallSVG = Small.bind({});


SmallSVG.args = {
  transactionData:
    [{ title: '상품', color: 'green', ratio: 20 },
    { title: '토마토', color: 'tomato', ratio: 30 },
    { title: '물', color: 'blue', ratio: 10 },
    { title: '닷져블루', color: 'dodgerblue', ratio: 40 }]
};
