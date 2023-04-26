import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddBlog from './components/AddBlog';
import AboutUs from './components/AboutUs';
import Contacts from './components/Contacts';
import Favorites from './components/Favorites';
import Header from './components/Header';

const App = () => {
  const blogs = [{title: 'Journal — Meiwen See', category: "Lifestyle", image:"https://images.squarespace-cdn.com/content/v1/5efd2b45c5ac7d61abff6eff/1659036982570-3S14393U48B3XQTHPXFJ/meiwensee-softgoodsweb-b+2.png?format=1000w" , info: "Meiwen is a professional designer and photographer who features travel, people, editorial, and interior photography." ,id: 1}, {title: 'Recipes by Flourist', category: "Food", image:"https://cdn.shopify.com/s/files/1/0282/5050/5250/articles/flouristresized.jpg?v=1664209881" , info: "Janna Bishop and Shira McDermott started Flourist in 2013 to celebrate grain and beans in their purest form. " ,id: 2}, {title: 'A Cup of Jo', category: "Lifestyle", image:"https://cupofjo.com/wp-content/uploads/2022/07/cup-of-jo.jpeg" , info: "Joanna Goddard created A Cup of Jo as a hobby many years ago while she worked as a writer for Glamour magazine. " ,id: 3}, 
  {title: 'Recipes | Mikaela Reuben', category: "Food", image:"https://i0.wp.com/media.scoutmagazine.ca/2021/01/Screen-Shot-2021-01-04-at-12.14.10-PM-copy.jpg?fit=1012%2C968&ssl=1" , info: "Mikaela Reuben publishes to-point recipes on her simple yet colorful-looking food blog. " ,id: 4},
  {title: 'Deadspin', category: "Sport", image:"https://static.clubs.nfl.com/image/private/t_new_photo_album/49ers/dfkoaugt9ptb5jjymamc.jpg" , info: "Sports News Without Fear, Favor or Compromise." ,id: 5},
  {title: 'BBC Sport', category: "Sport", image:"https://www.thesun.co.uk/wp-content/uploads/2021/07/74de299e-f0c3-4f61-9cdd-576e7dcd953b.jpg" , info: "Sports news and live sports coverage including scores, results, video, audio and analysis on Football, F1, Cricket, Rugby Union and all other UK sports." ,id: 6},
  {title: 'Tia Ward', category: "Beaty", image:"https://www.nme.com/wp-content/uploads/2017/08/Unknown-2.jpg" , info: "If you want awesome beauty tips as well as a slice of life advice on the side, visit Tia Ward's blog." ,id: 7},
  {title: 'Beauty Is Boring', category: "Beaty", image:"https://beautyisboring.com/wp-content/uploads/2016/08/Sophie-Koella-Beauty-Is-Boring-Robin-Black-BTS-Robin-Black-02.jpg" , info: "Despite this blog's moniker, its approach to beauty is anything but. Expect bold, bright and breathtaking images from this contemporary site. " ,id: 8} 
];

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home blogs={blogs}/>}/>
        <Route path='/add' element={<AddBlog/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/favorites' element={<Favorites blogs={blogs}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App