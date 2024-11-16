import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main className='pb-14 lg:pb-0'>
    <Header/>
    {/* <Navbar/> */}
    <div>
        <Outlet/>
    </div>
    </main>
  );
}

export default App;
