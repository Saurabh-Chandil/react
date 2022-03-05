import './App.css';
import { ObjectUseState } from './components/Immutable State/ObjectUseState';
import Parent from './components/Parent Child/Parent';
import Child from './components/Parent Child/Child';
import { UseReducer } from './components/UseReducer/UseReducer';
import { UseState } from './components/UseState/UseState';
import { ParentOne } from './components/Incorrect Optimization/ParentOne';
import { ContextRenderParent } from './components/Context and Render/ContextRenderParent';
import { ChildA } from './components/Context and Render/ContextRenderChild';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      
      {/* 1. <Parent /> */}
      {/* <Parent>
        <Child /> 
        2. way ~ same element reference
      </Parent> */}

      {/* <ParentOne /> */}

      {/* 1.way <ContextRenderParent /> */}
      {/* 2.way */}
      <ContextRenderParent>
        <ChildA />
      </ContextRenderParent>
    </div>
  );
}

export default App;
