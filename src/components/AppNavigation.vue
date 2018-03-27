<template>
  <div id="menu">
    <a href="#" class="menu-toggle">
      <span></span>
      <span></span>
      <span></span>
    </a>
    <ul id="dropdown-menu">
      <li class="dropdown-item">
        <a href="#introduction">Introduction</a>
      </li>
      <li class="dropdown-item">
        <a href="#about">About</a>
      </li>
      <li class="dropdown-item">
        <a href="#food">Food</a>
      </li>
    </ul>
  </div>
</template>

<style>
ul li {
  font-size: .8em;
}

#menu{
  position: fixed;
  display: inline-block;
  /*font size 0 removes white space from inline block elements*/
  font-size: 0;
  margin-top: 40px;
  margin-left: 25px;
  z-index: 50;
}

#menu:hover {
  border:1px solid rgb(220,220,220);
  border-radius: 2px;
}

#menu a:hover {
  color: inherit;
  text-decoration: underline;
}

#menu .menu-toggle {
  padding: 10px;
  background: rgba(255,255,255,0.9);
  display: inline-block;
  border: 1px solid transparent;
  z-index: 5;
}

#menu .menu-toggle span {
  display: block;
  margin: 2.5px 0px;
  width: 16px;
  height: 3px;
  background: #33333D;
}

#dropdown-menu {
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid rgb(220,220,220);
  font-size: 16px;
  text-align: center;
  width: 100px;
  height: 70px;
}

#menu:hover #dropdown-menu {
  display: block;
  padding: 15px 0px;
  border-radius: 2px;
  box-shadow: 0 5px 10px -2px rgba(0,0,0,.16);
  -webkit-box-shadow: 0 5px 10px -2px rgba(0,0,0,.16);
}

#dropdown-menu li a {
  display: block;
  padding: 5px 15px;
  color: inherit;
  text-decoration: none;
}

.dropdown-item:hover {
  background: #fff;
}

</style>
