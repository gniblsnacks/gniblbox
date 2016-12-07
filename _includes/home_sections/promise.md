<section class="over offwhite-bg"> <!--OUR PROMISE-->
  <div class="container">
    <h2 class="alt-header">Our Promise</h2>
    <div class="col-xs-12 col-sm-6 col-sm-offset-0">
      <h3>Employers</h3>
      {% for benefit in page.promise.employers %}
      <div class="row">
        <div class="col-xs-2">
          <img src="{{benefit.image}}">
        </div>
        <div class="col-xs-10">
            <h4>{{benefit.header}}</h4>
            <p>{{benefit['sub text']}}</p>
        </div>
      </div>
      {% endfor %}
    </div>
    <div class="col-xs-12 col-sm-6 col-sm-offset-0">
      <h3>Employees</h3>
      {% for benefit in page.promise.employees %}
      <div class="row">
        <div class="col-xs-2">
          <img src="{{benefit.image}}">
        </div>
        <div class="col-xs-10">
            <h4>{{benefit.header}}</h4>
            <p>{{benefit['sub text']}}</p>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
