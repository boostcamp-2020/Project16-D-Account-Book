import React, { useState } from 'react';
import FormModalWrapper from '../form-modal-template/FormModalWrapper';
import FormModalItem from '../form-modal-template/FormModalItemWrapper';
import FormModalLabel from '../form-modal-template/FormModalLabel';
import ModalBackground from '../modal-background/ModalBackground';
import FormModalHeader from '../form-modal-header/FormModalHeader';
import { observer } from 'mobx-react';
import CategoryPreview from '../../category-preview/CategoryPreview';
import InputText from '../../inputs/input-text/InputText';

const FormModalCategory: React.FC = () => {
  const [name, setName] = useState<string>('카테고리 1');
  const [inputColor, setInputColor] = useState<string>('#000000');

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChange = (color: { hex: string }): void => {
    setInputColor(color.hex);
  };

  return (
    <ModalBackground show={true}>
      <FormModalWrapper>
        <FormModalHeader modalName={'카테고리 생성'} blueName={'생성'} />
        <FormModalItem>
          <CategoryPreview title={name} color={inputColor} onChange={onChange} />
        </FormModalItem>
        <FormModalItem>
          <FormModalLabel>카테고리 이름</FormModalLabel>
          <InputText
            maxLength={8}
            placeholder={'최대 8자의 카테고리명을 입력해주세요.'}
            value={name}
            onChange={onChangeName}
          />
        </FormModalItem>
      </FormModalWrapper>
    </ModalBackground>
  );
};

export default observer(FormModalCategory);
