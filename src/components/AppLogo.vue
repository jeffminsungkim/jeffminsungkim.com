<template>
  <div class="container">
    <div class="container-wrapper">
    <div id="logo">JeffMinsungKim</div>
    <div id="tagline">Awesome Personal Website</div>
  </div>
  </div>
</template>

<style lang="scss" scoped>

.container {
  min-height: 100vh;
  color: $primary-color;
}

.container-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 200px;
}

.container-wrapper #logo {
  padding: 0;
  max-width: 750px;
  font: 45px $logo-font;
}

.container-wrapper #tagline {
  padding: 7px 0;
  margin: 0;
  font: 11px $content-font;
}

@include xs {
    .container-wrapper #logo {
      padding-top: 50px;
      font: 55px $logo-font;
    }

    .container-wrapper #tagline {
      padding: 5px 0;
      margin: 0;
      font: 10px $content-font;
    }
  }

  @include sm {
    .container-wrapper #logo {
      font: 75px $logo-font;
    }

    .container-wrapper #tagline {
      padding: 5px 0;
      margin: 0;
      font: 13px $content-font;
    }
  }

  @include md {
    .container-wrapper #logo {
      font: 100px $logo-font;
    }

    .container-wrapper #tagline {
      padding: 5px 0;
      margin: 0;
      font: 15px $content-font;
    }
  }

</style>
