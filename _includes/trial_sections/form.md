<section class="offwhite-bg header-bg">
  <div style="width: 100%; height: 120px; position: relative">
    <h2 class="handdrawn page-header">{{page.header}}</h2>
  </div>
  <div class="container">
    <div class="row box-bg" style="padding: 20px 80px">
      <div class="col-xs-12 col-md-6">    
      <p>{{page['form lead']}}</p>
        {% for step in page.steps %}
        <div class="step" style="display: block; clear: both; margin-bottom: 20px; overflow: auto">
          <img style="width: 60px; float: left;" src="/assets/images/numbers/{{forloop.index}}.svg">
          <p style="margin: 0 0 0 10px; width: calc(100% - 70px); float: left">{{step}}</p>
        </div>
        {% endfor %}
        <div class="offer">
        <p>Already decided? <a href="/pricing">Subscribe now</a> and receive {{page['subscribe now offer']}}.</p>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
      <form id="trial-form" style="margin-top: 20px">
      <input class="half" type="text" name="first_name" placeholder="First name">
      <input class="half" type="text" name="last_name" placeholder="Last name">
      <input type="text" name="company" placeholder="Company">
      <input type="text" name="job_title" placeholder="Job title">
      <input type="text" name="phone" placeholder="Work phone">
      <input type="email" name="email" placeholder="Work email">
      <input type="text" style="position: absolute; left: -2000px" placeholder="Please leave this empty. Thanks!">
      <a class="btn btn-red" style="max-width: none" onclick="submitTrialForm()"><span>Request your box</span></a>
      </form>
      </div>
    </div>
  </div>
</section>
