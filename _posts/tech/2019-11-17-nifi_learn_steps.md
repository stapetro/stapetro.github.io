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
  - big data
#
# Styling
#
header: no
lang: en
lang-ref: nifiLearnSteps
comments: true
---
# Background
Apache Nifi ([nye fye][10]) is a decent tool. It minimizes writing code in many cases. The tool forced me to think in flow-based style 
which was totally unknown area for me.

The tool is frequently used as an orchestrator only when teams/developers don't invest enough time in learning it.
The orchestration capability is a small fraction of Nifi's rich feature set.
There are many built-in ready-to-use data processors the tool provides for you.
The learning curve is a bit steeper than learning how to print your name with Python.
That's why I decided to start sharing ideas on how to solve various tasks with flow-based programming using Nifi.
I hope this article is the beginning of ongoing series.

# Knowledge sources
1. Wikipedia - read at least [flow-based programming][1] wiki's page to get an idea of this programming paradigm.
2. Official [Apache Nifi][2] [documentation][7]
    1. [Apache Nifi Overview][8] explains the concepts and the programming perspective.
    2. [Apache Nifi Terminology][9] explains briefly the system's domain model.
3. Apache Nifi [source code][3] is the most genuine source of truth.
4. [Cloudera/Hortonworks Community Forum][5] presents many case studies and implementation directions.
4. Trial & Error experience

# Environment and tools
1. Official [Apache Nifi][4] docker image runs the system in a single-node execution mode.
2. Any OS that supports docker.
3. [Load existing workflow][6] on docker container's startup.

# Tasks
I share a tasks' list I covered with Nifi.
1. Save large XML files into JSON-formatted documents in ElasticSearch (ES) store.
2. Send a mobile push notification when an XML file is processed successfully.
3. Clean invalid cache data when a new XML file is processed.
4. Saving ES data without disturbing current production users. I leverage ES' alias/index feature.
5. Create maintenance jobs to clean up old resources.

 [1]: https://en.wikipedia.org/wiki/Flow-based_programming
 [2]: https://nifi.apache.org/
 [3]: https://github.com/apache/nifi
 [4]: https://hub.docker.com/r/apache/nifi/
 [5]: https://community.cloudera.com/t5/tag/NiFi/tg-p
 [6]: https://www.bmtrealitystudios.com/dockerising-nifi/
 [7]: https://nifi.apache.org/docs/nifi-docs/
 [8]: https://nifi.apache.org/docs/nifi-docs/html/overview.html
 [9]: https://nifi.apache.org/docs/nifi-docs/html/user-guide.html#terminology
 [10]: https://nifi.apache.org/faq.html
