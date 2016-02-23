# Oscars 2016

Editorial app for vox.

## Installation

You must first setup your development environment. Follow the steps [here](https://github.com/voxmedia/411/wiki/Editorial-Apps-Rig).

This repo uses a git submodule. In order to properly clone this repo...

    git clone --recursive git@github.com:voxmedia/vox-oscars-2016.git

If you have already cloned this repo and you are missing the contents of the
directory...

    git submodule update --init

Next you need to install the bundle...

    bundle install

And finally run the app

    bundle exec middleman

To setup chorus deployment...

    bundle exec rake add_chorus_remote
    git push chorus master

TO DO:
- add movie title to item
- filters become dropdown on mobile viewport

- add overall header
- hardcode image paths // $item.html('<img src="' + "http://ea.vox-cdn.com/production/vox-bowie-sortable/images/" + slug + '.png" />');

asked:
- Do we want to include movie availability? (filter)
- Need the ranks
- Will each movie have a popup description? Or should I just plan to add the movie title to the image itself?
  - if so, embed video correctly
- Fact check my classes
