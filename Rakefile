task default: %w[run]

task :test do
  sh "bundle exec htmlproofer --assume-extension --empty-alt-ignore --typhoeus-config '{ \"ssl_verifypeer\": false }' --http-status-ignore 999 ./_site"
end

task :run do
  sh "bundle exec 'jekyll serve --livereload --drafts'"
end