<section class="offwhite-bg header-bg">
  <div style="width: 100%; height: 120px; position: relative">
    <h2 class="handdrawn page-header">{{page.header}}</h2>
  </div>
  <div class="container">
    <div class="row box-bg no-bg-mobile" style="padding-top: 20px; padding-bottom: 20px">
      <div class="col-xs-12 col-md-6">    
      <p>{{page['form lead']}}</p>
        {% for step in page.steps %}
        <div class="step" style="display: block; clear: both; margin-bottom: 20px; overflow: auto">
          <img style="width: 60px; float: left;" src="/assets/images/numbers/{{forloop.index}}.svg">
          <p style="margin: 0 0 0 10px; width: calc(100% - 70px); float: left">{{step}}</p>
        </div>
        {% endfor %}
        <div class="offer">
        <p style="font-style: italic; font-size: 14px">Already decided? <a href="/pricing">Subscribe now</a> and receive {{page['subscribe now offer']}}.</p>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
      <form id="trial-form" style="margin-top: 20px">
      <input class="half" type="text" name="first_name" placeholder="First name" required>
      <input class="half" type="text" name="last_name" placeholder="Last name" required>
      <input type="email" name="email" placeholder="Email" required>
      <input type="text" name="company" placeholder="Company" required>
      <input type="text" name="job_title" placeholder="Job title" required>
      <input type="text" name="phone" placeholder="Work phone" required>
      <input type="text" class="honeypot" style="position: absolute; left: -2000px" placeholder="Please leave this empty. Thanks!">
      <a class="btn btn-red" style="max-width: none" onclick="$('#trial-form').submit()"><span>Request your box</span></a>
      <input type="submit" style="position: absolute; left: -2000px">
      </form>
      <p style="display: none" class="trial-success">Great! We've received your request and will reach out to you shortly.</p>
      <p style="display: none" class="trial-error">Uh oh. Something went wrong. Please try again shortly.</p>
      </div>
    </div>
  </div>
  <script>
      if (getUrlParameter('email')) {
        console.log(getUrlParameter('email'));
        $("input[name='email']").val(getUrlParameter('email'));
      }
  </script>
</section>
