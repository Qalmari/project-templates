import ThingStore, { thingStore } from '../stores/ThingStore';
import { createContext, FunctionComponent, useContext } from 'react';
import { Observer } from 'mobx-react-lite';

interface IStoreContext {
  thingManager: ThingStore
}

const defaultValue: IStoreContext = {
  thingManager: thingStore
};

export const StoreContext = createContext<IStoreContext>(defaultValue);

export const StoreProvider: FunctionComponent<any> = ({ children }) => {
  return <Observer>{() => <StoreContext.Provider value={defaultValue}>{children}</StoreContext.Provider>}</Observer>;
};

export const useManagers = (): IStoreContext => {
  return useContext(StoreContext);
};
