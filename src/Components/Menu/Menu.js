import {useState} from 'react';

const Menu = () => {
  const [menuIsActive, setMenuActive] = useState(false);
  if (menuIsActive) {
    return (
      <nav>
        <button className='hamburger'></button>
        <ul>
          <li>
            <a href='/home'>Home</a>
          </li>
          <li>
            <a href='/arts'>Arts</a>
          </li>
          <li>
            <a href='/automobiles'>Automobiles</a>
          </li>
          <li>
            <a href='/books'>Books</a>
          </li>
          <li>
            <a href='/business'>Business</a>
          </li>
          <li>
            <a href='/fashion'>Fashion</a>
          </li>
          <li>
            <a href='/food'>Food</a>
          </li>
          <li>
            <a href='/health'>Health</a>
          </li>
          <li>
            <a href='/insider'>Insider</a>
          </li>
          <li>
            <a href='/magazine'>Magazine</a>
          </li>
          <li>
            <a href='/movies'>Movies</a>
          </li>
          <li>
            <a href='/nyregion'>NY Region</a>
          </li>
          <li>
            <a href='/obituaries'>Obituaries</a>
          </li>
          <li>
            <a href='/opinion'>Opinion</a>
          </li>
          <li>
            <a href='/politics'>Politics</a>
          </li>
          <li>
            <a href='/realestate'>Real Estate</a>
          </li>
          <li>
            <a href='/science'>Science</a>
          </li>
          <li>
            <a href='/sports'>Sports</a>
          </li>
          <li>
            <a href='/sundayreview'>Sunday Review</a>
          </li>
          <li>
            <a href='/technology'>Technology</a>
          </li>
          <li>
            <a href='/theater'>Theater</a>
          </li>
          <li>
            <a href='/t-magazine'>T-Magazine</a>
          </li>
          <li>
            <a href='/travel'>Travel</a>
          </li>
          <li>
            <a href='/upshot'>Upshot</a>
          </li>
          <li>
            <a href='/us'>US</a>
          </li>
          <li>
            <a href='/world'>World</a>
          </li>
        </ul>
      </nav>
    ) else {
      return (
        <button className='hamburger'></button>
      )
    }
  }
}

export default Menu;
