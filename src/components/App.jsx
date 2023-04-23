import { Routes, Route } from "react-router-dom";
import {Layout} from 'components/Layout'
import { HomePage } from "pages/HomePage";
import { AddUserPage } from "pages/AddUserPage";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
            <Route path='add' element={<AddUserPage />}/>
        </Route>
        
      </Routes>
    </div>
  );
};
