<template>
  <div>
    <section class="container-wrapper">
    <div class="content">
      <h1 id="introduction">Introduction</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Quo dolorem id recusandae omnis repellendus, dolorum impedit ullam?
        Illo pariatur ratione ad maxime, quasi velit consequatur modi porro
        impedit aliquam unde sequi harum eaque ex enim omnis aperiam autem repudiandae suscipit
        beatae iusto alias adipisci rem expedita. Nostrum earum minus magni!
      </p>
    </div>
    </section>
    <section>
    <div class="content">
      <h1 id="about">About Me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Magnam aspernatur ab unde itaque, cupiditate, praesentium nobis,
        porro quibusdam perspiciatis temporibus nostrum fugiat illo impedit commodi provident?
        Odit a at porro adipisci fugit facilis ea laudantium aperiam deserunt,
        fugiat atque voluptatibus accusamus tempore sit voluptatem nulla nostrum facere? Eveniet non,
        asperiores optio tenetur quisquam corporis incidunt deserunt molestias ipsum beatae ducimus.
      </p>
    </div>
  </section>
  <section>
    <div class="content">
      <h1 id="travel">Travel</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iste beatae ipsa consequatur iure corrupti sapiente quam voluptates ducimus? Voluptates,
        consectetur a? Optio ratione quibusdam fugit inventore ea dolore sequi qui tempora quia,
        repellendus consequuntur vitae voluptatem iure! Eveniet illum dolores perspiciatis
        maiores reiciendis accusamus reprehenderit doloribus in, nobis natus labore vitae ratione est quae
        tenetur commodi delectus earum veniam fuga at. Dicta tenetur hic enim blanditiis non, cum laborum sunt?
      </p>
    </div>
  </section>
  </div>
</template>

<style lang="scss" scoped>

h1 {
  margin-top: 0;
  font-size: 2rem;
}

p {
  font-size: .9rem;
}

section {
  @include content-section;
}

section .container-wrapper {
  padding-top: 20px;
}

.content {
  @include jmk-content;
}

#introduction {
  @include jmk-intro;
}

@include sm {
  .content h1 {
    font-size: 2.7rem;
  }
  .content p {
    font-size: 1.1rem;
  }
}

</style>

