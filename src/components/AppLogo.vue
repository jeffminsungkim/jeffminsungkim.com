<template>
  <div class="jmk-container">
    <div id="logo">JeffMinsungKim</div>
    <div id="tagline">Awesome Personal Website</div>
  </div>
</template>

<style lang="scss">
.jmk-container {
  max-width: 320px;
  min-height: 70vh;
  display: flex;           /* establish flex container */
  flex-direction: column;  /* make main axis vertical */
  justify-content: center; /* center items vertically, in this case */
  align-items: center;     /* center items horizontally, in this case */
  height: 300px;
  color: #33333D;


  @include sm {
    background: red;
  }
  @include md {
    background: green;
  }
  @include lg {
    background: blue;
  }
}

#logo {
  width: 300px;
  margin: 5px;
  text-align: center;
  font: 2rem 'Italiana', serif;
}

#tagline {
  position: absolute;
  margin: 38px 0;
  font: .5rem 'Raleway', sans-serif;
}

</style>
