import {Routes, Route} from "react-router-dom"
import { LandingPage } from "./features/landingPage/LandingPage";
import {SetNamePage, SetWorkspaceNamePage, SetWorkspaceTypePage,ProfileCompletePage } from "./features/landingPage/forms"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/" element={<SetNamePage/>}/>
          <Route path="setworkspacenamepage" element={<SetWorkspaceNamePage/>}/>
          <Route path="setworkspacetypepage" element={<SetWorkspaceTypePage/>}/>
          <Route path="profilecompletepage" element={<ProfileCompletePage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
