import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./pages/StartPage";
import MainPage from "./pages/MainPage";

import Intro from "./pages/Intro";
import ShortForm from "./pages/ShortForm";
import Search from "./pages/Search";
import MyPage from "./pages/MyPage";
import CategoryNews from "./pages/CategoryNews";
import CategoryNewsDetail from "./pages/CategoryNewsDetail";
import ChooseKeyword from "./pages/ChooseKeyword";
import NewsDetail from "./pages/NewsDetail";
import Modal from "react-modal";
import ErrorPage from "./pages/ErrorPage";

function App() {
  Modal.setAppElement("#root");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPageWrapper />}>
            <Route index element={<Intro />} />
            <Route path="choose" element={<ChooseKeyword />} />
          </Route>
          <Route path="/newstar" element={<MainPageWrapper />}>
            <Route index element={<ShortForm />} />
            <Route path=":articleId" element={<NewsDetail />} />
            <Route path="search" element={<Search />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="category" element={<CategoryNews />} />
            <Route
              path="category/:categoryId"
              element={<CategoryNewsDetail />}
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// StartPage로의 접근을 제어하는 컴포넌트
function StartPageWrapper() {
  return <StartPage />;
}

// MainPage로의 접근을 제어하는 컴포넌트
function MainPageWrapper() {
  return <MainPage />;
}

export default App;
