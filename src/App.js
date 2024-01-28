
// Import necessary dependencies
import React from 'react';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Main from './MainComponents/Main';
import Paper from './MenuComponents/Research/Paper';
import Patent  from './MenuComponents/Research/Patent';
import Certification  from './MenuComponents/Research/Certification';
import Blog  from './MenuComponents/Research/Blog';

import Info from './MenuComponents/Product/Info';

import Data from './MenuComponents/CRO/Data';

import Notice from './MenuComponents/Board/Notice';
import Press from './MenuComponents/Board/Press';
import Event from './MenuComponents/Board/Event';
import Album from './MenuComponents/Board/Album';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        {/* 연구개발 */}
        <Route path="/research/paper" element={<Paper />} />
        <Route path="/research/patent" element={<Patent />} />
        <Route path="/research/certification" element={<Certification />} />
        <Route path="/research/blog" element={<Blog />} />

        {/* 제품 */}
        <Route path="/product/info" element={<Info />} />

        {/* CRO 서비스 */}
        <Route path="/cro/data" element={<Data />} />

        {/* 알림마당 */}
        <Route path="/Board/notice" element={<Notice />} />
        <Route path="/Board/press" element={<Press />} />
        <Route path="/Board/event" element={<Event />} />
        <Route path="/Board/album" element={<Album />} />


      </Routes>
    </BrowserRouter>
  );
}
