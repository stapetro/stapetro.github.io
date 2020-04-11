---
layout: page
#
# Content
#
subheadline: "Nifi Test"
title: "Nifi title"
teaser: "Teaser notes bla bla..."
categories:
  - blog
  - tech
tags:
  - apache nifi
  - flow-based programming
#
# Styling
#
header: no
mediaplayer: true
lang: en
lang-ref: nifiKnowHow
comments: true
---
[mediaelement.js][1] is like magic. It's browser and device support is perfect. To activate the video or audio player just set the following variable in front matter to `true`.

~~~
mediaplayer: true
~~~

To use the player just use some HTML5-magic like...

<audio src="http://archive.org/download/music_from_all_around_the_world/02._music_from_all_around_the_world_-_the_black_atlantic_-_dandelion.mp3" type="audio/mp3" controls="controls"></audio>

{% highlight html %}
<audio src="http://archive.org/download/music_from_all_around_the_world/02._music_from_all_around_the_world_-_the_black_atlantic_-_dandelion.mp3" type="audio/mp3" controls="controls"></audio>
{% endhighlight %}

{% highlight html %}
<video id="player1_html5" width="640" height="360" preload="none" style="max-width: 100%; width: 750px; height: 421.875px;" poster="images/big_buck_bunny.jpg" playsinline="" webkit-playsinline="" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4">
                            <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4">
                            <track src="dist/mediaelement.vtt" srclang="en" label="English" kind="subtitles" type="text/vtt">
                        </video>
{% endhighlight %}

<video width="320" height="240" controls="controls" preload="none" poster="http://dwdemo.butlerccwebdev.net/html5-video/media/bigbuckbunny-poster.jpg">
	<source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4">
</video>


 [1]: http://mediaelementjs.com/
