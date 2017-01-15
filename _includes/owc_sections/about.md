<section class="dotted-bg mobile-header" style="padding-top: 60px; padding-bottom: 0">
  <div class="container divers">
    <div class="col-xs-12 col-md-5 hero-content">
      <h1 class="handdrawn main-header">{{page.Header}}</h1>
      <p>{{page['Promotion Description']}}</p>
    </div>
    <div class="visible-sm visible-xs col-xs-12">
      <img src="/assets/images/office-divers.png" style='width: 100%; max-width: 540px;'>
    </div>
  </div>
  <div class="wave wave-bottom" style="background-color: #7cd596"></div>
</section>
<style>
.divers {
  background: url(/assets/images/office-divers.png);
  background-size: auto 90%;
  background-position: bottom right;
  background-repeat: no-repeat;
}
@media (max-width: 1200px) {
  .divers {
    background-size: auto 80%;
  }
}

@media (min-width: 991px) {
    .hero-content {
      background: rgba(255,255,255,.75);
      padding: 0 30px 60px;
    }
    .main-header {
      margin-top: 25px;
      width: 70vw;
      max-width: 600px;
      left: -100px;
      text-align: center;
    }
  }

@media (max-width: 990px) {  
  header {
    background: none !important;
    box-shadow: none !important;
  }
  header .logo {
    -moz-transform: translateX(-50%);
      -o-transform: translateX(-50%);
     -ms-transform: translateX(-50%);
 -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    left: 50%;
  }
  nav {
    display: none !important;
  }
    .mobile-header {
        background-image: url("/assets/images/mobile-header.jpg");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: top;
    }
  .main-header {
    margin-top: 15px;
  }
  .divers {
    text-align: center;
    background-image: none;
  }
  p {
    text-align: left;
    max-width: 540px;
    margin: 30px auto 0;
  }
}
</style>
