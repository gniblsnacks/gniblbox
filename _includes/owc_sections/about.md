<section class="header-bg hbg-mobile">
  <div style="width: 100%; height: 120px; position: relative">
    <h2 class="handdrawn page-header">{{page.Header}}</h2>
  </div>
  <div class="container">
    <div class="col-xs-12 col-md-6">
      <p>{{page['Promotion Description']}}</p>
    </div>
    <div class="col-xs-12 col-md-6 divers">
     <img src="/assets/images/office-divers.png">
    </div>
  </div>
</section>
<style>
.divers {
 min-height: 50vh;
}
.divers img {
 width: 50vw;
 position: absolute;
 bottom: 0;
}
@media (max-width: 991px) {
 .divers {
   min-height: 60vw;
 }
 .divers img {
   width: 100%;
   max-width: 600px;
   margin: 0 auto;
 }
}
</style>
