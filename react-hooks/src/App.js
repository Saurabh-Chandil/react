import React from 'react';
import './App.css';
import ComponentC from './components/useContext/ComponentC';
import ClassCounter from './components/useEffect/ClassCounter';
import EffectOnceClass from './components/useEffect/EffectOnceClass';
import IntervalClassCounter from './components/useEffect/IntervalClassCounter';
import IntervalHookCounter from './components/useEffect/IntervalHookCounter';
import UseEffectCleanUp from './components/useEffect/UseEffectCleanUp';
import UseEffectCounter from './components/useEffect/UseEffectCounter';
import UseEffectFetchData from './components/useEffect/UseEffectFetchData';
import UseEffectOnceFunc from './components/useEffect/UseEffectOnceFunc';
import UseMemoCounter from './components/useMemo/UseMemoCounter';
import useMemoCounter from './components/useMemo/UseMemoCounter';
import UseReducerComplexObj from './components/useReducer/UseReducerComplexObj';
import UseReducerCounter from './components/useReducer/UseReducerCounter';
import UseReducerFetchData from './components/useReducer/UseReducerFetchData';
import UseReducerFetchDataOne from './components/useReducer/UseReducerFetchDataOne';
import UseReducerMultiple from './components/useReducer/UseReducerMultiple';
import UseRefFocusInput from './components/useRef/UseRefFocusInput';
import UseRefHookCounter from './components/useRef/UseRefHookCounter';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterPrevState /> */}
      {/* <HookCounterWObject /> */}
      {/* <HookCounterWOject /> */}
      {/* <HookCounterWArray /> */}
      {/* <ClassCounter /> */}
      {/* <UseEffectCounter /> */}
      {/* <EffectOnceClass /> */}
      {/* <UseEffectOnceFunc /> */}
      {/* <UseEffectCleanUp />   */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <UseEffectFetchData /> */}

      {/* <UserContext.Provider value={'Chandil'}>
        <ChannelContext.Provider value={'Youtube'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <UseReducerCounter /> */}
      {/* <UseReducerComplexObj /> */}
      {/* <UseReducerMultiple /> */}
      {/* <UseReducerFetchData /> */}
      {/* <UseReducerFetchDataOne /> */}

      {/* <UseMemoCounter /> */}
      
      {/* <UseRefFocusInput /> */}
      <UseRefHookCounter />
    </div>
  )
}

export default App;
