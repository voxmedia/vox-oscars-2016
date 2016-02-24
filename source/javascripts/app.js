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
      $item.html('<div class="img-title"><img src="' + "images/" + slug + '.png" />' + '<span class="rank-title">' + d.rank + '</span>' + '<span class="film-title">'+ d.film + '</span></div>');

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

    $('#filters a').click(function(e){
      var selector = $(this).attr('data-filter');
      isoContainer.isotope({ filter: selector });
      $('.major').removeClass('active');

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
