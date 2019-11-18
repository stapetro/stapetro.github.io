---
layout: page
#
# Content
#
subheadline: "Getting hands on Apache Nifi"
title: "Learning journey to Apache Nifi"
teaser: "I share my steps I walked through learning Apache Nifi"
categories:
  - blog
  - tech
tags:
  - apache nifi
  - flow-based programming
  - dataflow programming
#
# Styling
#
header: no
lang: en
lang-ref: nifiLearnSteps
comments: true
---
# Background
The article is the beginning of ongoing series. I'd like to share ideas on how to solve various tasks with flow-based programming.

# Knowledge sources
1. Wikipedia - read at least [flow-based programming][1] wiki's page to get an idea of this programming paradigm.
2. Official [Apache Nifi][2] documentation
3. Apache Nifi [source code][3]
4. [Cloudera/Hortonworks Community Forum][5]
4. Trial & Error experience

# Environment and tools
1. Official [Apache Nifi][4] docker image.
2. Any OS that supports docker.
3. [Load existing workflow][6] on docker container's startup.

# Tasks
I share a tasks' list I covered with Nifi.
1. Save large XML files into JSON-formatted documents in ElasticSearch store.
2. Send a mobile push notification when an XML file is processed successfully.
3. Clean invalid cache data when a new XML file is processed.
4. Saving JSON data without disturbing current production users.
5. Create maintenance jobs to clean up old resources.

 [1]: https://en.wikipedia.org/wiki/Flow-based_programming
 [2]: https://nifi.apache.org/
 [3]: https://github.com/apache/nifi
 [4]: https://hub.docker.com/r/apache/nifi/
 [5]: https://community.cloudera.com/t5/tag/NiFi/tg-p
 [6]: https://www.bmtrealitystudios.com/dockerising-nifi/