param([String]$actionName="Serve")
$env:JEKYLL_VERSION = "3.8"

Function Serve
{
    docker run --rm -p 4000:4000 --volume="${pwd}:/srv/jekyll" --volume="${pwd}/vendor/bundle:/usr/local/bundle" `
    -it jekyll/builder:$env:JEKYLL_VERSION bundle exec jekyll serve --config _config.yml,_config_dev.yml --watch --incremental
}

Function Build
{
    docker run --rm -p 4000:4000 --volume="${pwd}:/srv/jekyll" --volume="${pwd}/vendor/bundle:/usr/local/bundle" `
    -it jekyll/builder:$env:JEKYLL_VERSION bundle exec jekyll build --config _config.yml
}

Function Install
{
    docker run --rm -p 4000:4000 --volume="${pwd}:/srv/jekyll" --volume="${pwd}/vendor/bundle:/usr/local/bundle" `
    -it jekyll/builder:$env:JEKYLL_VERSION bundle install --no-deployment

}

invoke-expression  "$actionName"
