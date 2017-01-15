<section style="background-color: #7cd596; position: relative; padding: 20px 0 80px">
  <h2 class="alt-header" style="color: white">How to enter</h2>
  <div class="container">
    <div class="col-xs-12 col-md-5 pull-right">
    {% for step in page.Steps %}
      <div class="step box-bg" style="display: block; margin-bottom: 20px; overflow: auto">
        <img style="width: 60px; float: left;" src="/assets/images/numbers/{{forloop.index}}.svg">
        <p style="margin: 0 0 0 10px; width: calc(100% - 70px); float: left">{{step}}</p>
      </div>
    {% endfor %}
      <div style="margin: 30px 0">
        <h2 class="handdrawn red-header" style="text-transform: none; padding: 25px 0; text-align: center; display: block">#OfficeWorkoutChallenge</h2>
      </div>
    </div>
    <div class="col-xs-12 col-md-7" style="text-align: center">
      <img src="/assets/images/gnibl-prize.png" style="width: 100%; max-width: 540px;">
    </div>
    <div class="col-xs-12" style="clear:both; margin-top: 40px">
      <div style="color: white !important">{{page['Legal Description'] | markdownify | strip_html}}</div>
    </div>
  </div>
</section>

<style>
.box-bg {
  padding: 10px 25px 10px 0;
  background-position: center right;
}
</style>
