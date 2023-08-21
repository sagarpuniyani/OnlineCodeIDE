import './App.css';
import UserPage from './module/user/pages/UserPage';
import QuestionPage from './module/ide/pages/QuestionPage';

function App() {
  return (<>
  <QuestionPage />

    {/* Calling the user page  */}
    <UserPage />
  </>
  );
}

export default App;
