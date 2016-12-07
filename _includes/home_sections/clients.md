<section class="clients" style="text-align: center"> <!--CLIENTS-->
  <div class="client-icons" style="display: inline">
  {% for client in page.clients %}
    <img src="{{client.image}}" alt="{{client.name}}">
  {% endfor %}
  </div>
</section>
