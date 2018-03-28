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

<style lang="scss">

ul li {
  font-size: .8em;
}

#menu {
  position: fixed;
  display: inline-block;
  /*font size 0 removes white space from inline block elements*/
  font-size: 0;
  margin-top: 35px;
  right: 30px;
  z-index: 50;
}

#menu:hover {
  border: 1px solid #fff;
  border-radius: 2px;
}

#menu a:hover {
  color: inherit;
  text-decoration: underline;
}

#menu .menu-toggle {
  @include nav-burger;
}

#menu .menu-toggle span {
  @include nav-toggle;
}

#dropdown-menu {
  @include nav-dropdown;
}

#menu:hover #dropdown-menu {
  display: block;
  padding: 15px 0px;
  border-radius: 2px;
  box-shadow: 0 5px 10px -2px rgba(0,0,0,.16);
  -webkit-box-shadow: 0 5px 10px -2px rgba(0,0,0,.16);
}

#dropdown-menu li a {
  @include nav-dropdown-link;
}

.dropdown-item:hover {
  background: #fff;
}

</style>
