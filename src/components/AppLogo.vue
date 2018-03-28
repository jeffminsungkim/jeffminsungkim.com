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
  min-width: 320px;
  min-height: 85vh;
  color: #33333d;

}

.container-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 250px;
}

.container-wrapper #logo {
  padding: 0;
  font: 45px "Italiana", serif;
}

.container-wrapper #tagline {
  padding: 7px 0;
  margin: 0;
  font: 11px "Raleway", sans-serif;
}

@include xs {
    .container-wrapper #logo {
      font: 55px "Italiana", serif;
    }

    .container-wrapper #tagline {
      padding: 5px 0;
      margin: 0;
      font: 10px "Raleway", sans-serif;
    }
  }

  @include sm {
    .container-wrapper #logo {
      font: 75px "Italiana", serif;
    }

    .container-wrapper #tagline {
      padding: 5px 0;
      margin: 0;
      font: 13px "Raleway", sans-serif;
    }
  }

  @include md {
    .container-wrapper #logo {
      font: 100px "Italiana", serif;
    }

    .container-wrapper #tagline {
      padding: 5px 0;
      margin: 0;
      font: 15px "Raleway", sans-serif;
    }
  }

</style>
