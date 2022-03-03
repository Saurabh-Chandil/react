import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import { Hello } from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ObjectFlatten from './components/ObjectFlatten';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './advanced-guides/FragmentDemo';
import PureComp from './advanced-guides/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './advanced-guides/RefsDemo';
import RefsDemoClassComp from './advanced-guides/RefsDemoClassComp'
import FRParentInput from './advanced-guides/FRParentInput';
import PortalDemo from './advanced-guides/PortalDemo';
import Hero from './advanced-guides/Hero';
import ErrorBoundary from './advanced-guides/ErrorBoundary';
import HOCClickCounter from './advanced-guides/HOCClickCounter';
import HOCHoverCounter from './advanced-guides/HOCHoverCounter';
import ContextComp from './advanced-guides/ContextComp';
import UserContext from './advanced-guides/userContext';

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={{name: 'Saurabh'}}>
        <ContextComp />
      </UserContext.Provider>
      {/* <HOCClickCounter name='Super'/>
      <HOCHoverCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName={'Batman'} />
        <Hero heroName={'Superman'} />
        <Hero heroName={'Joker'} />
      </ErrorBoundary>   */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <RefsDemoClassComp /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComp /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
      {/* <Greet name="Tulika">
        <p>QWERTY</p>
      </Greet>
      <Greet name="Rani" /> */}
      
      {/* <Welcome name="Marc">
        <p>children for class compo</p>
      </Welcome>
      <Welcome name="Stephen"/>
      <Welcome name="Tom"/> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ObjectFlatten /> */}
     {/* < ParentComponent /> */}
     {/* <UserGreeting /> */}
     {/* <NameList /> */}
     {/* <Form /> */}
    </div>
  );
}

export default App;
