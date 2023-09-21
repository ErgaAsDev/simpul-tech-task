import { Routes, Route } from "react-router-dom";
import QuicksInbox from "./pages/QuicksInbox";

function App() {
  return (
    <Routes>
      <Route path="/" element={<QuicksInbox />} />
    </Routes>
  );
}
export default App;
