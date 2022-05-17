import './App.css';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';
import Update from './components/Update';
import ViewOne from './components/ViewOne';

function App() {
  return (
    <div className="App">
      <h1>Notes 📝</h1>
      <Link to="/">home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/notes/new">Create</Link>
      <hr />

      <Routes>
        {/* CREATE */}
        <Route path="/notes/new" element={<Create />} />

        {/* UPDATE */}
        <Route path="/notes/update/:id" element={<Update />} />

        {/* SHOW ONE */}
        <Route path="/notes/:id" element={<ViewOne />} />

        {/* MAIN - ALL NOTES */}
        <Route path="/notes" element={ <Main />} />

        {/* REDIRECT */}
        <Route path="*" element={<Navigate to="/notes" replace />} />

      </Routes>
    </div>
  );
}

export default App;
