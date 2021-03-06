#!/usr/bin/env bash

function serve() {
    #https://jekyllrb.com/docs/configuration/environments/
#    export JEKYLL_ENV=development
    export JEKYLL_VERSION=3.8
    sudo docker run --rm \
    -p 0.0.0.0:4000:4000 \
    --volume="$PWD:/srv/jekyll" \
    --volume="$PWD/vendor/bundle:/usr/local/bundle" \
    -it jekyll/builder:$JEKYLL_VERSION \
    bundle exec jekyll serve --incremental --drafts --config _config.yml,_config_dev.yml
}

function build() {
    export JEKYLL_ENV=production
    export JEKYLL_VERSION=3.8
    sudo docker run --rm \
    -p 4000:4000 \
    --volume="$PWD:/srv/jekyll" \
    --volume="$PWD/vendor/bundle:/usr/local/bundle" \
    -it jekyll/builder:$JEKYLL_VERSION \
    bundle exec jekyll build --config _config.yml
}

function update() {
    export JEKYLL_ENV=production
    export JEKYLL_VERSION=3.8
    sudo docker run --rm \
    -p 4000:4000 \
    --volume="$PWD:/srv/jekyll" \
    --volume="$PWD/vendor/bundle:/usr/local/bundle" \
    -it jekyll/builder:$JEKYLL_VERSION \
    bundle update --bundler
}

if [ -z ${1} ]; then
  serve
else
  ${1}
fi
