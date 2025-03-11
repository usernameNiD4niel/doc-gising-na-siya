import './App.css';
import Quiz4Pics1Word from './components/Quiz4Pics1Word';
import QuizPad from './components/QuizPad';

const App = () => {
  return (
    <div className="content">
      <h1 className='text-green-700'>Rsbuild with React</h1>
      <p className='text-red-500'>Start building amazing things with Rsbuild.</p>
      <div className='w-full flex items-center justify-center flex-col'>
        <Quiz4Pics1Word />
        <QuizPad />
      </div>
    </div>
  );
};

export default App;
