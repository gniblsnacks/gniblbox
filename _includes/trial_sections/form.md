<section class="offwhite-bg header-bg">
  <div style="width: 100%; height: 120px; position: relative">
    <h2 class="handdrawn page-header">{{page.header}}</h2>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-5 col-md-6">
        {% for step in page.steps %}
        <div class="step">
          <img src="/assets/images/numbers/{{forloop.index}}.svg">
          <p>{{step}}</p>
        </div>
        {% endfor %}
        <div class="offer">
        <p>Already decided? <a href="/pricing">Subscribe now</a> and receive {{page['subscribe now offer']}}.</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-7 col-md-6 box-bg" style="padding: 20px 60px">
      <form>
      <p>{{page['form lead']}}</p>
      <input class="half" type="text" placeholder="First name">
      <input class="half" type="text" placeholder="Last name">
      <input type="text" placeholder="Company">
      <input type="text" placeholder="Job title">
      <input type="text" placeholder="Work phone">
      <input type="email" placeholder="Work email">
      <input type="text" style="position: absolute; left: -2000px" placeholder="Please leave this empty. Thanks!">
      <a class="btn btn-red" style="max-width: none"><span>Request your box</span></a>
      </form>
      </div>
    </div>
  </div>
</section>
