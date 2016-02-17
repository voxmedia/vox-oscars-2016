###
# Extensions
###

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Put pages in their own directories, so you end up with URLs
# like `/lorem-ipsum` instead of `/lorem-ipsum.html`
activate :directory_indexes

# Google Drive integration
#
# Load a single spreadsheet
# https://docs.google.com/spreadsheets/d/1nH4LH15wO3nx31vO9CtqP3HkJItg98LdxMHsy321TQw/edit#gid=0
activate :google_drive,
         :load_sheets => '1nH4LH15wO3nx31vO9CtqP3HkJItg98LdxMHsy321TQw'
#
# Load multiple google spreadsheets
# activate :google_drive, load_sheets: {
#     :spreadsheet => 'my_key'
# }

# Chorus integration
#
# Activate the chorus exension to use the `chorus` object
activate :chorus
#
# If you're deploying to chorus but not using the API, you
# still must activate it:
# activate :chorus
#
# Load content from chorus with an entry slug or id
# activate :chorus, load_entries: {
#     :story => 'my-story-slug'
# }

###
# Page options, layouts, settings
###

set :slug, 'oscars-2016'
set :vertical, 'vox'

# The publish date:
set :publish_date, '2016-02-17 15:41'

# The authors of this graphic
set :authors, 'sarahfrostenson'

# Theme: dark or light
set :theme, 'dark'

set :title, data.microcopy['title']
set :meta_description, data.microcopy['meta_description']

# Default text that goes into tweet and pin buttons
set :tweet_text, data.microcopy['tweet_text']
# Default text to use in pinterest shares
set :pinterest_text, data.microcopy['pinterest_text']

# Default image used in open graph tags (facebook, twitter cards, etc)
set :sharing_image, data.microcopy['social_image']

# Disable responsive headers; mobile devices render site at 1024px wide
# and enable pan and zoom.
# set :not_responsive, true

# Tell web crawlers to ignore this page
# set :no_index, true

# Display stb in the navbar
# set :show_stb, true

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

###
# Proxies and sitemap
###

# Automatically build a sitemap from the spreadsheet
# build_sitemap_with data.pages
# Automatically build a sitemap from Chorus
build_sitemap_with data.entries

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

###
# Build-specific configuration
###
configure :build do
  # Stuff in this block only applies when the project is built (middleman build)
  # Add unique IDs to asset filenames. You want this. Disabling it
  # may fix a problem, but it will cause problems for your users
  # that you may not see.
  activate :asset_hash

  # Package and compress all our javascripts and styles
  activate :minify_javascript
  activate :minify_css
end
