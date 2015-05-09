# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.1'

# Add additional assets to the asset load path
#Rails.application.config.assets.paths << Rails.root.join('vendor', 'assets', 'fonts')
Rails.application.config.assets.paths << Rails.root.join('vendor', 'assets', 'stylesheets')
Rails.application.config.assets.paths << Rails.root.join('vendor', 'assets', 'javascripts')
Rails.application.config.assets.paths << Rails.root.join('vendor', 'assets', 'images')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

Rails.application.config.assets.precompile += %w(
  brokebot.js
  robot_page.css
  snap.svg-min.js
  robot_styles.css
  customM.js
  bootstrap.css
  PTS55F-webfont.eot
  PTS55F-webfont.woff
  PTS55F-webfont.ttf
  PTS75F-webfont.eot
  PTS75F-webfont.woff
  PTS75F-webfont.ttf
  PTS76F-webfont.eot
  PTS76F-webfont.woff
  PTS76F-webfont.ttf
  PTS56F-webfont.eot
  PTS56F-webfont.woff
  PTS56F-webfont.ttf
  )
