//= require foundation
$(document).foundation();

(function() {
  // Application code goes here

  $(document).ready(function() {
    // Initialize lazy load
    $('.lazy').lazyload({
      threshold : 0,
      failure_limit: 999,
      effect: 'fadeIn',
      data_attribute_queries: [
        {media: "(max-width: 1600px)", data_name: "x-large"},
        {media: "(max-width: 1200px)", data_name: "large"},
        {media: "(max-width: 900px)", data_name: "medium"},
        {media: "(max-width: 640px)", data_name: "small"},
        {media: "(max-width: 400px)", data_name: "x-small"}
      ]
    });

    // Initialize your code here
  });
})();
