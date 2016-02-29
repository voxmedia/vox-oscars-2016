//= require foundation
//= require_tree ./templates
//= require isotope

$(document).foundation();

(function() {

  function renderItems() {

    var isoContainer = $("#isotope-holder"),
        fragment = $(document.createDocumentFragment());

    var slugify = function(text) {
        text = text.replace(/[^-a-zA-Z0-9,&\s]+/ig, '');
        text = text.replace(/-/gi, "_");
        text = text.replace(/,/gi, "");
        text = text.replace(/\s/gi, "_");
        text = text.toLowerCase();
        return text;
    };

    _.each(DATA, function(d, i) {
      var slug = slugify(d.film);
      var $item = $('<div class="reveal-link item ' + d.awardType + ' '+ d.availabilityFilter + '"></div>');

      $item.data('name', d.film);
      $item.data('nameIDMB', d.filmIDMB);
      $item.data('rank', d.rank);
      $item.data('nominated', d.nominated);
      $item.data('about', d.about);
      $item.data('link', d.link);
      $item.data('video', d.video);
      $item.data('availability', d.availability);
      $item.html('<div class="img-title"><img src="' + "http://ea.vox-cdn.com/production/vox-oscars-2016/images/" +
                  slug + '0.png" />' + '<span class="rank-title">' + d.rank + '</span>' +
                  '<span class="film-title">'+ d.film + '</span></div>');
      if (d.won) {
        $item.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.0 9.8" class="oscar-logo" data-svg-fallback-override=""><path fill="#FFF3C2" d="M3.9,9.1c0-0.1-0.2-0.2-0.5-0.3c0-0.1,0.1-0.1,0.1-0.2c0-0.2-0.1-0.3-0.1-0.4c0,0,0,0,0,0C3.3,8,3,7.9,2.4,7.8c0-0.1,0-0.1,0-0.1s-0.1-0.6,0-0.9C2.6,6.5,2.6,6.1,2.5,6c0-0.1-0.1-0.4,0-0.6c0.1-0.1,0.1-0.5,0.2-1c0-0.5-0.1-0.6-0.1-0.6V3.4h0.1C3,3.4,3,2.8,3.1,2.5c0-0.3,0.2-0.5,0-0.8C2.8,1.4,2.3,1.3,2.3,1.3l0-0.3c0,0,0.2-0.1,0.1-0.6C2.4,0,2,0,2,0H1.9c0,0-0.4,0-0.4,0.4C1.5,0.9,1.7,1,1.7,1l0,0.3c0,0-0.6,0.1-0.8,0.4c-0.2,0.3,0,0.6,0,0.8c0,0.3,0.1,0.9,0.4,0.9h0.1v0.4c0,0-0.1,0.1-0.1,0.6c0,0.5,0.1,0.8,0.2,1c0.1,0.1,0,0.5,0,0.6c0,0.1-0.1,0.5,0.1,0.9c0.2,0.3,0,0.9,0,0.9s0,0,0,0.1C1,7.9,0.6,8,0.6,8.2c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.1,0.4c0,0.1,0,0.1,0.1,0.2C0.2,8.9,0,9,0,9.1v0.7c0,0,0.4,0.5,2.1,0.4c1.7,0,1.8-0.5,1.8-0.5L3.9,9.1L3.9,9.1z"></path></svg><span class="oscar-win">' + d.won + '</span>');
      }
      // if (d.wonTwo) {
      //   $item.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.0 9.8" class="oscar-logo" data-svg-fallback-override=""><path fill="#FFF3C2" d="M3.9,9.1c0-0.1-0.2-0.2-0.5-0.3c0-0.1,0.1-0.1,0.1-0.2c0-0.2-0.1-0.3-0.1-0.4c0,0,0,0,0,0C3.3,8,3,7.9,2.4,7.8c0-0.1,0-0.1,0-0.1s-0.1-0.6,0-0.9C2.6,6.5,2.6,6.1,2.5,6c0-0.1-0.1-0.4,0-0.6c0.1-0.1,0.1-0.5,0.2-1c0-0.5-0.1-0.6-0.1-0.6V3.4h0.1C3,3.4,3,2.8,3.1,2.5c0-0.3,0.2-0.5,0-0.8C2.8,1.4,2.3,1.3,2.3,1.3l0-0.3c0,0,0.2-0.1,0.1-0.6C2.4,0,2,0,2,0H1.9c0,0-0.4,0-0.4,0.4C1.5,0.9,1.7,1,1.7,1l0,0.3c0,0-0.6,0.1-0.8,0.4c-0.2,0.3,0,0.6,0,0.8c0,0.3,0.1,0.9,0.4,0.9h0.1v0.4c0,0-0.1,0.1-0.1,0.6c0,0.5,0.1,0.8,0.2,1c0.1,0.1,0,0.5,0,0.6c0,0.1-0.1,0.5,0.1,0.9c0.2,0.3,0,0.9,0,0.9s0,0,0,0.1C1,7.9,0.6,8,0.6,8.2c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.1,0.4c0,0.1,0,0.1,0.1,0.2C0.2,8.9,0,9,0,9.1v0.7c0,0,0.4,0.5,2.1,0.4c1.7,0,1.8-0.5,1.8-0.5L3.9,9.1L3.9,9.1z"></path></svg><span class="oscar-win">2</span>'
      //             );
      // }
      // if (d.wonThree) {
      //     $item.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.0 9.8" class="oscar-logo" data-svg-fallback-override=""><path fill="#FFF3C2" d="M3.9,9.1c0-0.1-0.2-0.2-0.5-0.3c0-0.1,0.1-0.1,0.1-0.2c0-0.2-0.1-0.3-0.1-0.4c0,0,0,0,0,0C3.3,8,3,7.9,2.4,7.8c0-0.1,0-0.1,0-0.1s-0.1-0.6,0-0.9C2.6,6.5,2.6,6.1,2.5,6c0-0.1-0.1-0.4,0-0.6c0.1-0.1,0.1-0.5,0.2-1c0-0.5-0.1-0.6-0.1-0.6V3.4h0.1C3,3.4,3,2.8,3.1,2.5c0-0.3,0.2-0.5,0-0.8C2.8,1.4,2.3,1.3,2.3,1.3l0-0.3c0,0,0.2-0.1,0.1-0.6C2.4,0,2,0,2,0H1.9c0,0-0.4,0-0.4,0.4C1.5,0.9,1.7,1,1.7,1l0,0.3c0,0-0.6,0.1-0.8,0.4c-0.2,0.3,0,0.6,0,0.8c0,0.3,0.1,0.9,0.4,0.9h0.1v0.4c0,0-0.1,0.1-0.1,0.6c0,0.5,0.1,0.8,0.2,1c0.1,0.1,0,0.5,0,0.6c0,0.1-0.1,0.5,0.1,0.9c0.2,0.3,0,0.9,0,0.9s0,0,0,0.1C1,7.9,0.6,8,0.6,8.2c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.1,0.4c0,0.1,0,0.1,0.1,0.2C0.2,8.9,0,9,0,9.1v0.7c0,0,0.4,0.5,2.1,0.4c1.7,0,1.8-0.5,1.8-0.5L3.9,9.1L3.9,9.1z"></path></svg><span class="oscar-win">3</span>'
      //             );
      // }
      // if (d.wonFour) {
      //   $item.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.0 9.8" class="oscar-logo" data-svg-fallback-override=""><path fill="#FFF3C2" d="M3.9,9.1c0-0.1-0.2-0.2-0.5-0.3c0-0.1,0.1-0.1,0.1-0.2c0-0.2-0.1-0.3-0.1-0.4c0,0,0,0,0,0C3.3,8,3,7.9,2.4,7.8c0-0.1,0-0.1,0-0.1s-0.1-0.6,0-0.9C2.6,6.5,2.6,6.1,2.5,6c0-0.1-0.1-0.4,0-0.6c0.1-0.1,0.1-0.5,0.2-1c0-0.5-0.1-0.6-0.1-0.6V3.4h0.1C3,3.4,3,2.8,3.1,2.5c0-0.3,0.2-0.5,0-0.8C2.8,1.4,2.3,1.3,2.3,1.3l0-0.3c0,0,0.2-0.1,0.1-0.6C2.4,0,2,0,2,0H1.9c0,0-0.4,0-0.4,0.4C1.5,0.9,1.7,1,1.7,1l0,0.3c0,0-0.6,0.1-0.8,0.4c-0.2,0.3,0,0.6,0,0.8c0,0.3,0.1,0.9,0.4,0.9h0.1v0.4c0,0-0.1,0.1-0.1,0.6c0,0.5,0.1,0.8,0.2,1c0.1,0.1,0,0.5,0,0.6c0,0.1-0.1,0.5,0.1,0.9c0.2,0.3,0,0.9,0,0.9s0,0,0,0.1C1,7.9,0.6,8,0.6,8.2c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.1,0.4c0,0.1,0,0.1,0.1,0.2C0.2,8.9,0,9,0,9.1v0.7c0,0,0.4,0.5,2.1,0.4c1.7,0,1.8-0.5,1.8-0.5L3.9,9.1L3.9,9.1z"></path></svg><span class="oscar-win">4</span>'
      //             );
      // }
      // if (d.wonFive) {
      //   $item.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.0 9.8" class="oscar-logo" data-svg-fallback-override=""><path fill="#FFF3C2" d="M3.9,9.1c0-0.1-0.2-0.2-0.5-0.3c0-0.1,0.1-0.1,0.1-0.2c0-0.2-0.1-0.3-0.1-0.4c0,0,0,0,0,0C3.3,8,3,7.9,2.4,7.8c0-0.1,0-0.1,0-0.1s-0.1-0.6,0-0.9C2.6,6.5,2.6,6.1,2.5,6c0-0.1-0.1-0.4,0-0.6c0.1-0.1,0.1-0.5,0.2-1c0-0.5-0.1-0.6-0.1-0.6V3.4h0.1C3,3.4,3,2.8,3.1,2.5c0-0.3,0.2-0.5,0-0.8C2.8,1.4,2.3,1.3,2.3,1.3l0-0.3c0,0,0.2-0.1,0.1-0.6C2.4,0,2,0,2,0H1.9c0,0-0.4,0-0.4,0.4C1.5,0.9,1.7,1,1.7,1l0,0.3c0,0-0.6,0.1-0.8,0.4c-0.2,0.3,0,0.6,0,0.8c0,0.3,0.1,0.9,0.4,0.9h0.1v0.4c0,0-0.1,0.1-0.1,0.6c0,0.5,0.1,0.8,0.2,1c0.1,0.1,0,0.5,0,0.6c0,0.1-0.1,0.5,0.1,0.9c0.2,0.3,0,0.9,0,0.9s0,0,0,0.1C1,7.9,0.6,8,0.6,8.2c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.1,0.4c0,0.1,0,0.1,0.1,0.2C0.2,8.9,0,9,0,9.1v0.7c0,0,0.4,0.5,2.1,0.4c1.7,0,1.8-0.5,1.8-0.5L3.9,9.1L3.9,9.1z"></path></svg><span class="oscar-win">5</span>'
      //             );
      // }
      // if (d.wonSix) {
      //   $item.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.0 9.8" class="oscar-logo" data-svg-fallback-override=""><path fill="#FFF3C2" d="M3.9,9.1c0-0.1-0.2-0.2-0.5-0.3c0-0.1,0.1-0.1,0.1-0.2c0-0.2-0.1-0.3-0.1-0.4c0,0,0,0,0,0C3.3,8,3,7.9,2.4,7.8c0-0.1,0-0.1,0-0.1s-0.1-0.6,0-0.9C2.6,6.5,2.6,6.1,2.5,6c0-0.1-0.1-0.4,0-0.6c0.1-0.1,0.1-0.5,0.2-1c0-0.5-0.1-0.6-0.1-0.6V3.4h0.1C3,3.4,3,2.8,3.1,2.5c0-0.3,0.2-0.5,0-0.8C2.8,1.4,2.3,1.3,2.3,1.3l0-0.3c0,0,0.2-0.1,0.1-0.6C2.4,0,2,0,2,0H1.9c0,0-0.4,0-0.4,0.4C1.5,0.9,1.7,1,1.7,1l0,0.3c0,0-0.6,0.1-0.8,0.4c-0.2,0.3,0,0.6,0,0.8c0,0.3,0.1,0.9,0.4,0.9h0.1v0.4c0,0-0.1,0.1-0.1,0.6c0,0.5,0.1,0.8,0.2,1c0.1,0.1,0,0.5,0,0.6c0,0.1-0.1,0.5,0.1,0.9c0.2,0.3,0,0.9,0,0.9s0,0,0,0.1C1,7.9,0.6,8,0.6,8.2c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.1,0.4c0,0.1,0,0.1,0.1,0.2C0.2,8.9,0,9,0,9.1v0.7c0,0,0.4,0.5,2.1,0.4c1.7,0,1.8-0.5,1.8-0.5L3.9,9.1L3.9,9.1z"></path></svg><span class="oscar-win">6</span>'
      //             );
      // }
      // if (d.wonSeven) {
      //   $item.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.0 9.8" class="oscar-logo" data-svg-fallback-override=""><path fill="#FFF3C2" d="M3.9,9.1c0-0.1-0.2-0.2-0.5-0.3c0-0.1,0.1-0.1,0.1-0.2c0-0.2-0.1-0.3-0.1-0.4c0,0,0,0,0,0C3.3,8,3,7.9,2.4,7.8c0-0.1,0-0.1,0-0.1s-0.1-0.6,0-0.9C2.6,6.5,2.6,6.1,2.5,6c0-0.1-0.1-0.4,0-0.6c0.1-0.1,0.1-0.5,0.2-1c0-0.5-0.1-0.6-0.1-0.6V3.4h0.1C3,3.4,3,2.8,3.1,2.5c0-0.3,0.2-0.5,0-0.8C2.8,1.4,2.3,1.3,2.3,1.3l0-0.3c0,0,0.2-0.1,0.1-0.6C2.4,0,2,0,2,0H1.9c0,0-0.4,0-0.4,0.4C1.5,0.9,1.7,1,1.7,1l0,0.3c0,0-0.6,0.1-0.8,0.4c-0.2,0.3,0,0.6,0,0.8c0,0.3,0.1,0.9,0.4,0.9h0.1v0.4c0,0-0.1,0.1-0.1,0.6c0,0.5,0.1,0.8,0.2,1c0.1,0.1,0,0.5,0,0.6c0,0.1-0.1,0.5,0.1,0.9c0.2,0.3,0,0.9,0,0.9s0,0,0,0.1C1,7.9,0.6,8,0.6,8.2c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.1,0.4c0,0.1,0,0.1,0.1,0.2C0.2,8.9,0,9,0,9.1v0.7c0,0,0.4,0.5,2.1,0.4c1.7,0,1.8-0.5,1.8-0.5L3.9,9.1L3.9,9.1z"></path></svg><span class="oscar-win">7</span>'
      //             );
      // } else if (d.wonEight) {
      //   $item.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.0 9.8" class="oscar-logo" data-svg-fallback-override=""><path fill="#FFF3C2" d="M3.9,9.1c0-0.1-0.2-0.2-0.5-0.3c0-0.1,0.1-0.1,0.1-0.2c0-0.2-0.1-0.3-0.1-0.4c0,0,0,0,0,0C3.3,8,3,7.9,2.4,7.8c0-0.1,0-0.1,0-0.1s-0.1-0.6,0-0.9C2.6,6.5,2.6,6.1,2.5,6c0-0.1-0.1-0.4,0-0.6c0.1-0.1,0.1-0.5,0.2-1c0-0.5-0.1-0.6-0.1-0.6V3.4h0.1C3,3.4,3,2.8,3.1,2.5c0-0.3,0.2-0.5,0-0.8C2.8,1.4,2.3,1.3,2.3,1.3l0-0.3c0,0,0.2-0.1,0.1-0.6C2.4,0,2,0,2,0H1.9c0,0-0.4,0-0.4,0.4C1.5,0.9,1.7,1,1.7,1l0,0.3c0,0-0.6,0.1-0.8,0.4c-0.2,0.3,0,0.6,0,0.8c0,0.3,0.1,0.9,0.4,0.9h0.1v0.4c0,0-0.1,0.1-0.1,0.6c0,0.5,0.1,0.8,0.2,1c0.1,0.1,0,0.5,0,0.6c0,0.1-0.1,0.5,0.1,0.9c0.2,0.3,0,0.9,0,0.9s0,0,0,0.1C1,7.9,0.6,8,0.6,8.2c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.1,0.4c0,0.1,0,0.1,0.1,0.2C0.2,8.9,0,9,0,9.1v0.7c0,0,0.4,0.5,2.1,0.4c1.7,0,1.8-0.5,1.8-0.5L3.9,9.1L3.9,9.1z"></path></svg><span class="oscar-win">8</span>'
      //             );
      // } else if (d.wonNine) {
      //   $item.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.0 9.8" class="oscar-logo" data-svg-fallback-override=""><path fill="#FFF3C2" d="M3.9,9.1c0-0.1-0.2-0.2-0.5-0.3c0-0.1,0.1-0.1,0.1-0.2c0-0.2-0.1-0.3-0.1-0.4c0,0,0,0,0,0C3.3,8,3,7.9,2.4,7.8c0-0.1,0-0.1,0-0.1s-0.1-0.6,0-0.9C2.6,6.5,2.6,6.1,2.5,6c0-0.1-0.1-0.4,0-0.6c0.1-0.1,0.1-0.5,0.2-1c0-0.5-0.1-0.6-0.1-0.6V3.4h0.1C3,3.4,3,2.8,3.1,2.5c0-0.3,0.2-0.5,0-0.8C2.8,1.4,2.3,1.3,2.3,1.3l0-0.3c0,0,0.2-0.1,0.1-0.6C2.4,0,2,0,2,0H1.9c0,0-0.4,0-0.4,0.4C1.5,0.9,1.7,1,1.7,1l0,0.3c0,0-0.6,0.1-0.8,0.4c-0.2,0.3,0,0.6,0,0.8c0,0.3,0.1,0.9,0.4,0.9h0.1v0.4c0,0-0.1,0.1-0.1,0.6c0,0.5,0.1,0.8,0.2,1c0.1,0.1,0,0.5,0,0.6c0,0.1-0.1,0.5,0.1,0.9c0.2,0.3,0,0.9,0,0.9s0,0,0,0.1C1,7.9,0.6,8,0.6,8.2c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.1,0.4c0,0.1,0,0.1,0.1,0.2C0.2,8.9,0,9,0,9.1v0.7c0,0,0.4,0.5,2.1,0.4c1.7,0,1.8-0.5,1.8-0.5L3.9,9.1L3.9,9.1z"></path></svg><span class="oscar-win">9</span>'
      //             );
      // } else if (d.wonTen) {
      //   $item.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.0 9.8" class="oscar-logo" data-svg-fallback-override=""><path fill="#FFF3C2" d="M3.9,9.1c0-0.1-0.2-0.2-0.5-0.3c0-0.1,0.1-0.1,0.1-0.2c0-0.2-0.1-0.3-0.1-0.4c0,0,0,0,0,0C3.3,8,3,7.9,2.4,7.8c0-0.1,0-0.1,0-0.1s-0.1-0.6,0-0.9C2.6,6.5,2.6,6.1,2.5,6c0-0.1-0.1-0.4,0-0.6c0.1-0.1,0.1-0.5,0.2-1c0-0.5-0.1-0.6-0.1-0.6V3.4h0.1C3,3.4,3,2.8,3.1,2.5c0-0.3,0.2-0.5,0-0.8C2.8,1.4,2.3,1.3,2.3,1.3l0-0.3c0,0,0.2-0.1,0.1-0.6C2.4,0,2,0,2,0H1.9c0,0-0.4,0-0.4,0.4C1.5,0.9,1.7,1,1.7,1l0,0.3c0,0-0.6,0.1-0.8,0.4c-0.2,0.3,0,0.6,0,0.8c0,0.3,0.1,0.9,0.4,0.9h0.1v0.4c0,0-0.1,0.1-0.1,0.6c0,0.5,0.1,0.8,0.2,1c0.1,0.1,0,0.5,0,0.6c0,0.1-0.1,0.5,0.1,0.9c0.2,0.3,0,0.9,0,0.9s0,0,0,0.1C1,7.9,0.6,8,0.6,8.2c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.1,0.4c0,0.1,0,0.1,0.1,0.2C0.2,8.9,0,9,0,9.1v0.7c0,0,0.4,0.5,2.1,0.4c1.7,0,1.8-0.5,1.8-0.5L3.9,9.1L3.9,9.1z"></path></svg><span class="oscar-win">10</span>'
      //             );
      // } else if (d.wonEleven) {
      //   $item.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.0 9.8" class="oscar-logo" data-svg-fallback-override=""><path fill="#FFF3C2" d="M3.9,9.1c0-0.1-0.2-0.2-0.5-0.3c0-0.1,0.1-0.1,0.1-0.2c0-0.2-0.1-0.3-0.1-0.4c0,0,0,0,0,0C3.3,8,3,7.9,2.4,7.8c0-0.1,0-0.1,0-0.1s-0.1-0.6,0-0.9C2.6,6.5,2.6,6.1,2.5,6c0-0.1-0.1-0.4,0-0.6c0.1-0.1,0.1-0.5,0.2-1c0-0.5-0.1-0.6-0.1-0.6V3.4h0.1C3,3.4,3,2.8,3.1,2.5c0-0.3,0.2-0.5,0-0.8C2.8,1.4,2.3,1.3,2.3,1.3l0-0.3c0,0,0.2-0.1,0.1-0.6C2.4,0,2,0,2,0H1.9c0,0-0.4,0-0.4,0.4C1.5,0.9,1.7,1,1.7,1l0,0.3c0,0-0.6,0.1-0.8,0.4c-0.2,0.3,0,0.6,0,0.8c0,0.3,0.1,0.9,0.4,0.9h0.1v0.4c0,0-0.1,0.1-0.1,0.6c0,0.5,0.1,0.8,0.2,1c0.1,0.1,0,0.5,0,0.6c0,0.1-0.1,0.5,0.1,0.9c0.2,0.3,0,0.9,0,0.9s0,0,0,0.1C1,7.9,0.6,8,0.6,8.2c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.1,0.4c0,0.1,0,0.1,0.1,0.2C0.2,8.9,0,9,0,9.1v0.7c0,0,0.4,0.5,2.1,0.4c1.7,0,1.8-0.5,1.8-0.5L3.9,9.1L3.9,9.1z"></path></svg><span class="oscar-win">11</span>'
      //             );
      // } else if (d.wonTwelve) {
      //   $item.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.0 9.8" class="oscar-logo" data-svg-fallback-override=""><path fill="#FFF3C2" d="M3.9,9.1c0-0.1-0.2-0.2-0.5-0.3c0-0.1,0.1-0.1,0.1-0.2c0-0.2-0.1-0.3-0.1-0.4c0,0,0,0,0,0C3.3,8,3,7.9,2.4,7.8c0-0.1,0-0.1,0-0.1s-0.1-0.6,0-0.9C2.6,6.5,2.6,6.1,2.5,6c0-0.1-0.1-0.4,0-0.6c0.1-0.1,0.1-0.5,0.2-1c0-0.5-0.1-0.6-0.1-0.6V3.4h0.1C3,3.4,3,2.8,3.1,2.5c0-0.3,0.2-0.5,0-0.8C2.8,1.4,2.3,1.3,2.3,1.3l0-0.3c0,0,0.2-0.1,0.1-0.6C2.4,0,2,0,2,0H1.9c0,0-0.4,0-0.4,0.4C1.5,0.9,1.7,1,1.7,1l0,0.3c0,0-0.6,0.1-0.8,0.4c-0.2,0.3,0,0.6,0,0.8c0,0.3,0.1,0.9,0.4,0.9h0.1v0.4c0,0-0.1,0.1-0.1,0.6c0,0.5,0.1,0.8,0.2,1c0.1,0.1,0,0.5,0,0.6c0,0.1-0.1,0.5,0.1,0.9c0.2,0.3,0,0.9,0,0.9s0,0,0,0.1C1,7.9,0.6,8,0.6,8.2c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.1,0.4c0,0.1,0,0.1,0.1,0.2C0.2,8.9,0,9,0,9.1v0.7c0,0,0.4,0.5,2.1,0.4c1.7,0,1.8-0.5,1.8-0.5L3.9,9.1L3.9,9.1z"></path></svg><span class="oscar-win">12</span>'
      //             );
      // }

      fragment.append($item);
    });

    isoContainer.append(fragment);

  }

  function isotopeInit() {

    // declare modal template
    var modalTemplate = JST['templates/modal'];

    var isoContainer = $('#isotope-holder');

    isoContainer.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows',
        getSortData: {
            name: function(elem) {
                var name = $(elem).data('name');
                if (name.substring(0,4) === "The ") {
                  name = name.substring(4, name.length);
                } else if (name.substring(0,2) === "A ") {
                  name = name.substring(2, name.length);
                }
                return name;
            },
            rank: function(elem) {
              return parseInt($(elem).data('rank'));
            }
        },
        sortBy:'rank'
      });

    // filter by category
    $('.filters-button-group').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      isoContainer.isotope({ filter: filterValue });
      $('.button.dropdown').removeClass('active');
    });

    $('#drop1 a').click(function(e){
      var selector = $(this).attr('data-filter');
      isoContainer.isotope({ filter: selector });
      $('.major').removeClass('active');

      $('li a').removeClass('selected-1');
      $(e.currentTarget).addClass('selected-1');

      // change the value of the dropdown
      var newOption = e.currentTarget.textContent;
      $('.button.dropdown.active').html( newOption );

      // close dropdown menu on select
      $('ul').removeClass('open f-open-dropdown');

      return false;
    });

    $('#drop2 a').click(function(e){
      var selector = $(this).attr('data-filter');
      isoContainer.isotope({ filter: selector });
      $('.major').removeClass('active');

      $('li a').removeClass('selected-2');
      $(e.currentTarget).addClass('selected-2');

      // change the value of the dropdown
      var newOption = e.currentTarget.textContent;
      $('.button.dropdown.active').html( newOption );

      // close dropdown menu on select
      $('ul').removeClass('open f-open-dropdown');

      return false;
    });

    $('#drop3 a').click(function(e){
      var selector = $(this).attr('data-filter');
      isoContainer.isotope({ filter: selector });
      $('.major').removeClass('active');

      $('li a').removeClass('selected-3');
      $(e.currentTarget).addClass('selected-3');

      // change the value of the dropdown
      var newOption = e.currentTarget.textContent;
      $('.button.dropdown.active').html( newOption );

      // close dropdown menu on select
      $('ul').removeClass('open f-open-dropdown');

      return false;
    });

    // sort by rank / film name
    $('.sorters-button-group').on('click', 'button', function(e) {
      var $this = $(this),
      sorter = $this.attr('data-sort');
      isoContainer.isotope({sortBy: sorter});
    });

    // change active classes on button groups
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.active').removeClass('active');
        $( this ).addClass('active');
      });
    });

    // open item modal
    isoContainer.on('click', '.item', function(e){
        var $this = $(this);

        var fillModalTemplate = function () {
          var html = modalTemplate({
            name: $this.data('nameIDMB'),
            nominated: $this.data('nominated'),
            about: $this.data('about'),
            link: $this.data('link'),
            video: $this.data('video'),
            availability: $this.data('availability')
          });
          return html;
        };

        var modalHtml = fillModalTemplate();
        $('#modal').html(modalHtml);

        // trigger reveal modal
        $('.reveal-modal').foundation('reveal', 'open');
    });
  }

  $(document).ready(function() {
    renderItems();
    //  initialize Isotope inside $(window).load() instead of $(document).ready().
    // triggers Isotope after all the media on the page has loaded.
    $(window).load(function() {
          isotopeInit();
    });
  });
})();
