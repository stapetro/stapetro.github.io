#!/usr/bin/env bash

export JEKYLL_VERSION=3.8
sudo docker run --rm \
-p 4000:4000 \
--volume="$PWD:/srv/jekyll" \
-it jekyll/builder:$JEKYLL_VERSION \
jekyll serve