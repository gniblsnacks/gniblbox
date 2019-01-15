<section class="clients" style="text-align: center"> <!--CLIENTS-->
  <span class="hidden-xs" style="display: block; color: #cccccc; margin-bottom: 10px">Companies we work with</span>
  <div class="client-icons" style="display: inline;">
  {% for client in page.clients %}
  <div class="client tooltip-container">
    {% if client.link %}<a style="text-decoration: none" href="{{client.link}}">{% endif %}
    <img src="{{client.image}}" alt="{{client.name}}">
    {% if client.link %}</a>{% endif %}
    <div style="margin-top: 10px;" class="hidden-xs tooltip">
      <span style="display: block; text-align: center">{{client.name}}</span>
    </div>
  </div>
  {% endfor %}
  </div>
</section>
