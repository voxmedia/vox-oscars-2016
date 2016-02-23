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

    // render image
    // my problem is i'm appending null attr when i'd rather skip them
    _.each(DATA, function(d, i) {
      var $item;
      var slug = slugify(d.film);

      if (d.bestPicture) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.bestPicture + '"></div>');
      } else if (d.actor) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.actor + '"></div>');
      } else if (d.actress) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.actress + '"></div>');
      } else if (d.supportingActor) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.supportingActor + '"></div>');
      } else if (d.supportingActress) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.supportingActress + '"></div>');
      } else if (d.directing) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.directing + '"></div>');
      } else if (d.screenplayOriginal) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.screenplayOriginal + '"></div>');
      } else if (d.screenplayAdapted) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.screenplayAdapted + '"></div>');
      } else if (d.documentaryFeature) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.documentaryFeature + '"></div>');
      } else if (d.documentaryShort) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.documentaryShort + '"></div>');
      } else if (d.foreign) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.foreign + '"></div>');
      } else if (d.shortFilmAnimated) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.shortFilmAnimated + '"></div>');
      } else if (d.shortFilmLive) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.shortFilmLive + '"></div>');
      } else if (d.animated) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.animated + '"></div>');
      } else if (d.costume) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.costume + '"></div>');
      } else if (d.makeup) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.makeup + '"></div>');
      } else if (d.production) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.shortFilmLive + '"></div>');
      } else if (d.filmEditing) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.animated + '"></div>');
      } else if (d.song) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.costume + '"></div>');
      } else if (d.score) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.makeup + '"></div>');
      } else if (d.soundMixing) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.shortFilmLive + '"></div>');
      } else if (d.visual) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.animated + '"></div>');
      } else if (d.cinematography) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.costume + '"></div>');
      } else if (d.soundEditing) {
        $item = $('<div class="reveal-link item ' + "data-filter=" + d.makeup + '"></div>');
      }
        $item.data('name', d.film);
        $item.data('rank', d.rank);
        $item.data('about', d.about);
        $item.data('video', d.video);
        $item.html('<img src="' + "/images/" + slug + '.png" />');
        // $item.html('<img src="' + "http://ea.vox-cdn.com/production/vox-bowie-sortable/images/" + slug + '.png" />');
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
                  // } else if (name.substring(0,1) === "A ") {
                  //   name = name.substring(1, name.length);
                  //   console.log(name);
                  }
                  return name;
              },
              rank: function(elem) {
                return parseInt($(elem).data('rank'));
              }
          },
          sortBy:'rank'
        });

    // $('#filter-list').on('click', 'a', function(e){
    //     e.preventDefault();
    //     var $this = $(this);
    //     var filter = $this.attr('data-filter');
    //
    //     $this.parent('li').siblings().removeClass('active').addClass('disabled');
    //     $this.parent('li').removeClass('disabled').addClass('active');
    //
    //     isoContainer.isotope({ filter: '.' + filter });
    // });

    // bind filter button click
    $('.filters-button-group').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      console.log(filterValue);
      isoContainer.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });

    $('#sort-list').on('click', 'a', function(e) {
        e.preventDefault();
        var $this = $(this),
            sorter = $this.attr('data-sort');

        $this.parent('li').siblings().removeClass('active').addClass('disabled');
        $this.parent('li').removeClass('disabled').addClass('active');

        isoContainer.isotope({sortBy: sorter});
    });

    isoContainer.on('click', '.item', function(e){
        e.preventDefault();
        var $this = $(this);

        var fillModalTemplate = function () {
          var html = modalTemplate({
            name: $this.data('name'),
            about: $this.data('about'),
            video: $this.data('video')
          });
          return html;
        };

        var modalHtml = fillModalTemplate();
        $('#modal').html(modalHtml);

        // trigger reveal modal
        $('.reveal-modal').foundation('reveal', 'open');
    });

    // flatten object by concatting values
    function concatValues( obj ) {
      var value = '';
      for ( var prop in obj ) {
        value += obj[ prop ];
      }
      return value;
    }
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
