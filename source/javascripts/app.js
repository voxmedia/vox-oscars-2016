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
    _.each(DATA, function(d, i) {

      var slug = slugify(d.film);
      var $item = $('<div class="reveal-link item all ' + slugify(d.awardType) + '"></div>');
      $item.data('name', d.film);
      $item.data('rank', d.rank);
      $item.data('award-type', d.awardType);
      $item.data('about', d.about);
      $item.data('video', d.video);
      $item.html('<img src="' + "http://ea.vox-cdn.com/production/vox-bowie-sortable/images/august" + '.png" />');
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
                  }
                  return name;
              },
              year: function(elem) {
                  return parseInt($(elem).data('year'));
              }
          },
          sortBy:'rank'
        });

    $('#filter-list').on('click', 'a', function(e){
        e.preventDefault();
        var $this = $(this),
            filter = $this.attr('data-filter');

        $this.parent('li').siblings().removeClass('active').addClass('disabled');
        $this.parent('li').removeClass('disabled').addClass('active');

        isoContainer.isotope({ filter: '.' + filter });
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
