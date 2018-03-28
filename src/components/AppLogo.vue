<template>
  <div class="container">
    <div id="logo">JeffMinsungKim</div>
    <div id="tagline">Awesome Personal Website</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #33333d;
  padding-top: 130px;

  @include xs {
    #logo {
      width: 100%;
      font: 55px "Italiana", serif;
    }

    #tagline {
      position: absolute;
      margin: 45px 0;
      font: 12px "Raleway", sans-serif;
    }
  }

  @include sm {
    #logo {
      width: 100%;
      font: 75px "Italiana", serif;
    }

    #tagline {
      position: absolute;
      margin: 55px 0;
      font: 13px "Raleway", sans-serif;
    }
  }

  @include md {
    #logo {
      width: 100%;
      font: 100px "Italiana", serif;
    }

    #tagline {
      position: absolute;
      margin: 65px 0;
      font: 15px "Raleway", sans-serif;
    }
  }
}

#logo {
  width: 100%;
  font: 45px "Italiana", serif;
}

#tagline {
  position: absolute;
  margin: 38px 0;
  font: 10px "Raleway", sans-serif;
}
</style>
