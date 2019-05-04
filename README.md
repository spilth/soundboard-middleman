# Middleman Soundboard

A soundboard web site built using [Middleman](https://middlemanapp.com) and [SoundJS](https://www.createjs.com/soundjs).

## Getting Started

To check out the project, install Ruby gems and spin up the Middleman web server, do the following:

```bash
$ git clone git@github.com:spilth/soundboard-middleman.git
$ cd soundboard-middleman
$ bundle
$ rake server
```

Then visit <http://localhost:4567>

## Adding Sounds

To add a sound:

1. Put an MP3 in `source/sounds`
2. Add an entry for the sound in `data/sound.yml`

## Converting YouTube Videos to MP3 Files

You can use `bin/youtube2mp3` to convert a YouTuve video to an MP3 by passing it a YouTube video URL and the base name for the audio file (no extension):

```bash
$ bin/youtube2mp3 https://www.youtube.com/watch?v=MN8YJjXDfkA get-to-the-choppa
```
