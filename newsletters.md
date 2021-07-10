---
layout: base
title: Newsletters
---

## Newsletters - <a href="/feed/newsletters.xml"><i class="fa fa-rss" aria-hidden="true"></i> rss</a>

<ul>
  {% for newsletter in site.newsletters %}
    <li><a href="{{ newsletter.url }}">{{ newsletter.title }}</a> - {{ newsletter.date | date: "%F" }} -  {{ newsletter.description }}</li>
  {% endfor %}
</ul>

{% include footer.html %}
