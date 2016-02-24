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
- break up filters by category (get approval from Todd on categorization)
- add movie availability filter: "in theaters," "digital download," "streaming."

- photos
  - batch grayscale all
  - determine shading from like to dislike
  - ranking # in corner

- title w/ Todd's face

- why is it so jumpy on filter?

Post Publication:
- How do I want to add a winner?
  - little oscar person added in the corner
