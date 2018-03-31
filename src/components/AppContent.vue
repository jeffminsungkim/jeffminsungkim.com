<template>
  <div>
    <section class="container-wrapper">
      <div class="image-wrapper">
        <img src="~/assets/image/jmk-tech-cover.png" alt="Technologies Cover Image">
      </div>
    <div class="content">
      <h1 id="introduction">Introduction</h1>
      <h3 class="sub-head">See <a href="https://github.com/jeffminsungkim/jeffminsungkim.com">source code</a> on Github.</h3>
      <div class="jmk-blockquote">
        The purpose of creating this website is to share things that I'm interested in
        and also to describe how seriously I care about doing things on web development.
        Furthermore, I believe it's a wonderful opportunity for me to get my hands dirty to enhance my front-end skills.
      </div>
      <img src="~/assets/image/jmk-pia.png" alt="Programming is Awesome!">
      <h2>TL;DR</h2>
      <p>
        I've finally launched 🎉 a super simple fanciest personal website in early 2018.
        This website built within less than a day, by using <a href="https://github.com/nuxt/nuxt.js">Nuxt.js</a> and other amazing tools.
        Now I'm going to share the story of how I ended up with building this website.
      </p>
    </div>
    </section>
    <section>
      <div class="content">
        <h1 id="how-i-built">How I Built 🛠</h1>
        <h2 class="sub-head">Thought process while implementing my website</h2>
        <p class="post-date"><small>March 29, 2018</small></p>

        <h2>How I get started</h2>
        <p>
          At the time of writing, usage of static websites is increasing in popularity.
          In fact, it's not a big surprise as static site generators seem to have been gaining more popular among web developers these days too.
        </p>
        <p>
          For some reason, I had a chance to read one of the blog
          <a href="https://www.netlify.com/blog/2017/05/25/top-ten-static-site-generators-of-2017/">posts</a>
          on Netlify which was thankfully written by Eli Williamson.
          After finish reading his article thought it would be nice to get constructed with a static site
          before I dive into building my first website.
        </p>

        <h2>Static Site Generators</h2>
        <p>
          As I mentioned above, static site generators are one of the most popular options to create personal websites for developers.
          They've been around for a while, but have recently started gaining some serious steam.
        </p>
        <p>
          First thing first, I had to pick one of the
          <a href="https://github.com/myles/awesome-static-generators">static site generators</a> to make the magic happen on my website.
          <a href="https://jekyllrb.com/">Jekyll</a> holds it’s position at #1 as the most popular static site generator, but I wasn't really into it.
          Meanwhile, two frameworks called
          <a href="https://www.gatsbyjs.org/">Gatsby.js</a> and
          <a href="https://nuxtjs.org/">Nuxt.js</a> draw my attention while reading the post that I mentioned a minute ago.
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
          So before moving on, let's briefly talk about what the server-side rendering is, and let's find out the real benefit.
        </p>
        <div class="line-breaker">
          <h2>What is Server Side Rendering?</h2>
          <p>
            Server-side rendering (SSR) is the process of taking a client-side JavaScript framework website and
            rendering it to static HTML and CSS on the server.
          </p>
          <img src="~/assets/image/jmk-static-html-css.png" alt="Static HTML and CSS">
          <span>🤔 </span>
          <em>
            To find out more about benefits of
            <a href="https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8">
            Server Side Rendering VS., Client Side Rendering</a>, check out a brilliant Medium post written by Alex Grigoryan.
          </em>
        </div>
        <div class="line-breaker">
          <h3>Why is this important?</h3>
          <p>Most designers and developers tend to focus on building better aesthetic design or adding new nifty functionality on web pages.</p>
          <p>People, however, want fast-loading websites, and server-side rendering is a tool to help you get your site rendered faster!</p>
          <em>Be aware that page loading time is a critical factor in any website's user experience and moreover when it comes to search engine rankings.</em>
        </div>

        <div class="line-breaker">
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
              More server-side load.
              Rendering a full app in Node.js is obviously going to be more CPU-intensive than just serving static files,
              so if you expect high traffic, be prepared for corresponding server load and wisely employ caching strategies.
            </li>
          </ul>
        </p>
        </div>

        <h2>Decision</h2>
        <p>
          I was wavering between two frameworks Gatsby and Nuxt.
        </p>
        <span>🤔 </span>
        <em>
          To find out
          <a href="https://medium.com/vue-mastery/10-reasons-to-use-nuxt-js-for-your-next-web-application-522397c9366b">
          10 reasons to use Nuxt.js for your next web application</a>, check out a brilliant Medium post written by Derick Sozo.
        </em>

      </div>
    </section>
    <section>
    <div class="content">
      <h1 id="about">About Me 👋</h1>
      <img src="~/assets/image/jmk-huge-fan-of-js.png" alt="I'm a huge fan of JavaScript!">
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
  </div>
</template>

<style lang="scss" scoped>

section .container-wrapper {
  padding-top: 20px;
  max-width: 2560px;
}

.sub-head {
  opacity: .7;
  font-size: 1.1rem;
  color: #33333D;
}

.post-date {
  opacity: .7;
  text-align: right;
}

.line-breaker {
  border-bottom: 1px solid #eee;
  padding-bottom: 30px;
}

.jmk-blockquote {
  border-left: 3px solid rgba(0,0,0,.84);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  margin: 15px;
  margin-left: 5px;
  font-style: italic;
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

