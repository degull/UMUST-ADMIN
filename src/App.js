import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from './MainComponents/Main';

/* ---------------------------------------------------------------------- */

import Info from './MenuComponents/Product/Info';
import InfoForm from './MenuComponents/Product/InfoForm';
import InfoBoard from './MenuComponents/Product/InfoBoard';
import InfoDetail from './MenuComponents/Product/InfoDetail';

/* ---------------------------------------------------------------------- */
import Data from './MenuComponents/CRO/Data';
import DataBoard from './MenuComponents/CRO/DataBoard';
import DataForm from './MenuComponents/CRO/DataForm';
import DataDetail from './MenuComponents/CRO/DataDetail';



/* ---------------------------------------------------------------------- */

import Blog from './MenuComponents/Research/Blog/Blog';
import Certification from './MenuComponents/Research/Certification/Certification';
import Paper from './MenuComponents/Research/Paper/Paper';
import Patent from './MenuComponents/Research/Patent/Patent';

/* ----------------------------------------------------------------------- */


import Notice from './MenuComponents/Board/Notice/Notice';
import Press from './MenuComponents/Board/Press/Press';
import Event from './MenuComponents/Board/Event/Event';
import Album from './MenuComponents/Board/Album/Album';
/* ---------------------------------------------------------------------- */


// 논문
import PaperBoard from './MenuComponents/Research/Paper/PaperBoard';
import PaperDetail from './MenuComponents/Research/Paper/PaperDetail';
import PaperForm from './MenuComponents/Research/Paper/PaperForm';



// 공지사항
import NoticeForm from './MenuComponents/Board/Notice/NoticeForm';  // 추가
import NoticeBoard from './MenuComponents/Board/Notice/NoticeBoard';
import NoticeDetail from './MenuComponents/Board/Notice/NoticeDetail';

// 행사정보
import EventBoard from './MenuComponents/Board/Event/EventBoard';
import EventForm from './MenuComponents/Board/Event/EventForm';
import EventDetail from './MenuComponents/Board/Event/EventDetail';


// 보도자료
import PressBoard from './MenuComponents/Board/Press/PressBoard';
import PressForm from './MenuComponents/Board/Press/PressForm';
import PressDetail from './MenuComponents/Board/Press/PressDetail';
// 앨범
import AlbumBoard from './MenuComponents/Board/Album/AlbumBoard';
import AlbumForm from './MenuComponents/Board/Album/AlbumForm';
import AlbumDetail from './MenuComponents/Board/Album/AlbumDetail';
import BlogBoard from './MenuComponents/Research/Blog/BlogBoard';
import BlogForm from './MenuComponents/Research/Blog/BlogForm';
import BlogDetail from './MenuComponents/Research/Blog/BlogDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        {/* 연구개발 */}
        <Route path="/Research/patent" element={<Patent />} />
        <Route path="/Research/certification" element={<Certification />} />


        {/* 블로그 */}
        <Route path="/Research/blog" element={<Blog />} />
        <Route path="/Research/blogs" element={<BlogBoard />} />
        <Route path="/Research/blogs/create" element={<BlogForm />} />
        <Route path="/Research/blogs/:blogId" element={<BlogDetail/>}/>



        {/* -논문 */}
        <Route path="/Research/paper" element={<Paper />} />
        <Route path="/Research/papers" element={<PaperBoard />} /> 
        <Route path="/Research/papers/create" element={<PaperForm />} />
        <Route path="/Research/papers/:paperId" element={<PaperDetail />} />
        <Route path="/paper-board/:title" element={<PaperBoard />} />

        {/* 제품 */}
        <Route path="/product/info" element={<Info />} />
        <Route path="/product/infos" element={<InfoBoard />} /> 
        <Route path="/product/infos/create" element={<InfoForm />} /> 
        <Route path="/product/infos/:infoId" element={<InfoDetail />} /> 

        {/* CRO 서비스 */}
        <Route path="/Cro/data" element={<Data />} />
        <Route path="/Cro/datas" element={<DataBoard />} /> 
        <Route path="/Cro/datas/create" element={<DataForm />} /> 
        <Route path="/Cro/datas/:dataId" element={<DataDetail />} /> 

        
        {/* 알림마당 */}
        <Route path="/Board/notice" element={<Notice />} />
        <Route path="/Board/event" element={<Event />} />
        <Route path="/Board/press" element={<Press />} />
        <Route path="/Board/album" element={<Album />} />

       {/* -공지사항 */}
        <Route path="/Board/notices" element={<NoticeBoard />} /> 
        <Route path="/Board/notices/create" element={<NoticeForm />} />
        <Route path="/Board/notices/:noticeId" element={<NoticeDetail />} />

        {/* -행사정보 */}
        <Route path="/Board/events" element={<EventBoard />} />
        <Route path="/Board/events/create" element={<EventForm />} />
        <Route path="/Board/events/:eventId" element={<EventDetail/>}/>

        {/* -보도자료 */}
        <Route path="/Board/presses" element={<PressBoard />} />
        <Route path="/Board/presses/create" element={<PressForm />} />
        <Route path="/Board/presses/:pressId" element={<PressDetail />} />


        {/* -앨범 */}
        <Route path="/Board/albums" element={<AlbumBoard />} />
        <Route path="/Board/albums/create" element={<AlbumForm />} />
        <Route path="/Board/albums/:albumId" element={<AlbumDetail/>}/>

      </Routes>
    </BrowserRouter>
  );
}
