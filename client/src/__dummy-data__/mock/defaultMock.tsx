import RootStore from '../../store/RootStore';
import React, { createContext } from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

const RootContext = createContext<RootStore>(new RootStore());

interface IProvider {
  children: React.ReactNode;
}

const Provider: React.FC<IProvider> = ({ children }: IProvider) => {
  return <RootContext.Provider value={new RootStore()}>{children}</RootContext.Provider>;
};

const DefaultMobxMock: React.FC<IProvider> = ({ children }: IProvider) => {
  return <Provider>{children}</Provider>;
};

export default DefaultMobxMock;
