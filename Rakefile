task default: %w[test run]

task :test do
  sh "bundle exec htmlproofer --assume-extension --empty-alt-ignore --typhoeus-config '{ \"ssl_verifypeer\": false }' --http-status-ignore 999 ./_site --url-ignore /amzn.to/"
end

task :run do
  sh "bundle exec 'jekyll serve --livereload --drafts'"
end