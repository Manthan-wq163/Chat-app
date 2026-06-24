import Sidebar from './components/Sidebar'
import ChatWindow from './components/ChatWindow'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import './App.css';

function App() {
  return (

    <ProtectedRoute>
    <div className="app-container">

      <Sidebar />

      <ChatWindow />

    </div>
    </ProtectedRoute>
  );
}

export default App