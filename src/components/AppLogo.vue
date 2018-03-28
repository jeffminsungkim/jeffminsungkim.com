<template>
  <div class="container">
    <div id="logo">JeffMinsungKim</div>
    <div id="tagline">Awesome Personal Website</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 320px;
  min-height: 60vh;
  display: flex;           /* establish flex container */
  justify-content: center; /* center items vertically, in this case */
  align-items: center;     /* center items horizontally, in this case */
  text-align: center;
  color: #33333D;
  padding-top: 30px;

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
  font: 45px 'Italiana', serif;
}

#tagline {
  position: absolute;
  margin: 38px 0;
  font: 10px 'Raleway', sans-serif;
}

</style>
