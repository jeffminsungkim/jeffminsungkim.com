<template>
  <div>
    <section class="container-wrapper">
      <div class="image-wrapper">
        <img src="~/assets/image/jmk-tech-cover.png" alt="Technologies Cover Image">
      </div>
    <div class="content">
      <h1 id="introduction">Introduction</h1>
      <em>This website built within less than a day, by using <a href="https://github.com/nuxt/nuxt.js">Nuxt.js</a> and other amazing tools.</em>
      <p>
        I've finally completed 🎉 creating a personal website from scratch in early 2018.
        The purpose of creating this website is to share things that I'm interested in
        and also to describe how seriously I care about doing things on web development.
      </p>
      <h2>Planning Phase</h2>
      <p>
        By the time I write, usage of static websites is increasing in popularity.
        In fact, it's not a big surprise as static site generators seem to have been gaining more popular among web developers these days too.
      </p>
      <p>
        Before I get started building a website, based on the purpose of my website I thought it would be nice to get constructed with a static site.
        I was wavering between two frameworks <a href="https://www.gatsbyjs.org/">Gatsby.js</a> and <a href="https://nuxtjs.org/">Nuxt.js</a>.
      </p>
      <p>
        Gatsby.js is a static PWA (Progressive Web App) generator for React.
        I've been seeing a lot of people talking about Gatsby on Twitter, and everyone seems to love it.
      </p>
      <div class="line-breaker">
        <span>🤔 </span>
        <em>Check out the following
          <a href="https://medium.com/codingthesmartway-com-blog/gatsby-static-site-generator-for-react-introduction-b9fce7df6b24">Medium post</a>
          if you're interested in reading about Gatsby.js in details.
        </em>
      </div>
      <p>
        Nuxt.js is a framework for creating Universal <a href="https://vuejs.org/">Vue.js</a> Applications.
        Its main scope is <strong>UI rendering</strong> while abstracting away the client/server distribution.
        Also, the Nuxt offers server rendering or static file rendering to boost the performance of your web application.
      </p>
      <div class="line-breaker">
        <span>🤔 </span>
        <em>Check out the following
          <a href="https://medium.com/codingthesmartway-com-blog/introduction-to-server-rendered-vue-js-apps-with-nuxt-91dbfd80795a">Medium post</a>
          if you're interested in reading about Nuxt.js in details.
        </em>
      </div>
      <p>
        As you may have noticed it seems like they both provide Server-Side Rendering feature!
        So before moving on to the next step, let's briefly talk about what the server-side rendering is, and let's find out the real benefit.
      </p>
      <div class="line-breaker">
        <h2>What is Server Side Rendering?</h2>
        <p>
          Server-side rendering (SSR) is the process of taking a client-side JavaScript framework website and
          rendering it to static HTML and CSS on the server.
        </p>
        <img src="~/assets/image/jmk-static-html-css.png" alt="Static HTML and CSS">
        <em>To find out more about benefits of
          <a href="https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8">
          Server Side Rendering VS., Client Side Rendering</a>, check out the brilliant Medium post written by Alex Grigoryan.
        </em>
      </div>
      <div class="line-breaker">
        <h3>Why is this important?</h3>
        <p>Most designers and developers tend to focus on building better aesthetic design or adding new nifty functionality on web pages.</p>
        <p>People, however, want fast-loading websites, and server-side rendering is a tool to help you get your site rendered faster!</p>
        <em>Be aware that page loading time is a critical factor in any website's user experience and moreover when it comes to search engine rankings.</em>
      </div>

      <div>
      <h3>Pros and Cons</h3>
      <p>
        Compared to a traditional SPA (Single-Page Application), the advantage of SSR primarily lies in:
        <ul>
          <li>Better SEO, as the search engine crawlers will directly see the fully rendered page.</li>
          <li>
            Faster time-to-content, especially on slow internet or slow devices.
            Server-rendered markup doesn't need to wait until all JavaScript has been downloaded and executed to be displayed.
          </li>
        </ul>
      </p>
      <p>
        There are also some trade-offs to consider when using SSR:
        <ul>
          <li>
            Development constraints.
            Browser-specific code can only be used inside certain lifecycle hooks; some external libraries may need
            special treatment to be able to run in a server-rendered app.
          </li>
          <li>
            More involved build setup and deployment requirements.
            Unlike a fully static SPA that can be deployed on any static file server,
            a server-rendered app requires an environment where a Node.js server can run.
          </li>
          <li>
            More server-side load.
            Rendering a full app in Node.js is obviously going to be more CPU-intensive than just serving static files,
            so if you expect high traffic, be prepared for corresponding server load and wisely employ caching strategies.
          </li>
        </ul>
      </p>
      </div>

      <h2>Building Phase</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sint labore modi cumque illo unde ab dolor ut iusto! Atque?</p>
      <img src="~/assets/image/jmk-huge-fan-of-js.png" alt="I'm a huge fan of JavaScript!">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum eius expedita ut sapiente id nisi deserunt ex iusto doloribus saepe!</p>
    </div>
    </section>
    <section>
    <div class="content">
      <h1 id="about">About Me 👋</h1>
      <img src="~/assets/image/jmk-pia.png" alt="Programming is Awesome!">
      <p>
        I feel confident about learning new technologies and
        especially interested in discovering hottest Front-end web application frameworks.
      </p>
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

em {
  font-size: .85rem;
}

img {
  width: 100%;
  height: 100%;
}

ul {
  padding: 0 20px;
}

li {
  padding-bottom: 20px;
}

section {
  @include content-section;
}

section .container-wrapper {
  padding-top: 20px;
  max-width: 2560px;
}

.line-breaker {
  border-bottom: 1px solid #eee;
  padding-bottom: 30px;
}


.content {
  @include jmk-content;
}

#introduction {
  padding-top: 40px;
}

@include sm {
  .content h1 {
    font-size: 2.7rem;
  }
  .content p {
    font-size: 1.1rem;
  }
  .image-wrapper {
  padding: 0 100px;
}
}

</style>

