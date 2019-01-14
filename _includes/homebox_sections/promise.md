<section id="promise" class="offwhite-bg"> <!--OUR PROMISE-->
  <div class="container">
    <h2 class="alt-header">{{page['promise header']}}</h2>
    <!-- <div class="col-sm-6">
      <h3>Employers</h3>
      {% for benefit in page.promise.employers %}
      <div class="row" style="margin: 20px 0; min-height: 160px">
        <div class="col-xs-2" style="padding: 0">
          <img src="{{benefit.image}}">
        </div>
        <div class="col-xs-10">
            <h4 style="margin: 0 0 10px">{{benefit.header | markdownify | strip_html}}</h4>
            {{benefit['sub text'] | markdownify }}
        </div>
      </div>
      {% endfor %}
    </div> -->
    <div class="col-sm-12">
      <!-- <h3>Employees</h3> -->
      {% for benefit in page.promise.employees %}
      <div class="col-sm-6">
      <div class="row" style="margin: 20px 0; min-height: 160px">
        <div class="col-xs-2" style="padding: 0">
          <img src="{{benefit.image}}">
        </div>
        <div class="col-xs-10">
            <h4 style="margin: 0 0 10px">{{benefit.header | markdownify | strip_html}}</h4>
            {{benefit['sub text'] | markdownify }}
        </div>
      </div>
    </div>
      {% endfor %}
    </div>
  </div>
</section>
