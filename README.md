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
Post Publication:
- How do I want to add a winner?
  - little oscar person added in the corner (how to do this? ideally, not uploading a new image)
- can I make the page less jumpy?
