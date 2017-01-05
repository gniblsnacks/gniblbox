<section class="home-hero header-bg"> <!--HOME HERO-->
  <h1 class="handdrawn main-header">{{page.landing.headline | markdownify | strip_html}}</h1>
  <div class="container">
  <div class="col-xs-12 col-sm-8 col-sm-offset-2">
    <p>{{page.landing["sub text"] | markdownify | strip_html}}</p>
    <form id="landing-form">
      <input type="email" name="email" placeholder="Your email address" required>
      <a class="btn btn-red" onclick="$('#landing-form').submit()" style="max-width: none !important"><span>{{page.landing.cta | markdownify | strip_html}}</span></a>
      <input type="submit" style="position: absolute; left: -2000px">
      <div class="validation"></div>
    </form>
  </div>
  </div>
</section>
