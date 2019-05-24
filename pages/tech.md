---
layout: page
show_meta: false
title: "Software Engineering Blog"
subheadline: "IT & Software"
header:
   image_fullwidth: "header_unsplash_5.jpg"
permalink: "/blog/tech/"
---
<ul>
    {% for post in site.categories.tech %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>