---
layout: base
title: Timeline
---

## Posts

{% for post in site.posts %}
  <div>
	  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
		{% capture words %}
			{{ post.content | number_of_words | minus: 220 }}
		{% endcapture %}
		On {{ post.date | date: "%B %-d, %Y"  }} in
    <a href="/">{{ post.category | split: '-' | join: ' ' }}</a> • <i class="fa fa-clock-o"></i>
		{% if words contains "-" %}
			1 minute read
		{% else %}
			{{ words | plus: 220 | divided_by: 220 | append: " minutes read" }}
		{% endif %}
	  <p>{{ post.content | strip_html | truncatewords: 50 | remove: '<p>' | remove: '</p>' }}</p>
  </div>
{% endfor %}
