---
layout: page
show_meta: false
title: "Software Engineering Blog"
subheadline: "IT & Software"
header:
    image_fullwidth: "header_trigrad_devil_throat_20190505_122717_768_432.jpg"
    images:
        - width: 1600
          path: "header_trigrad_devil_throat_20190505_122717_1600_900.jpg"
        - width: 768
          path: "header_trigrad_devil_throat_20190505_122717_768_432.jpg"
permalink: "/blog/tech/"
lang: en
---
<ul>
    {% assign singleLangPosts = site.categories.tech | where:"lang", page.lang %}
    {% for post in singleLangPosts %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
