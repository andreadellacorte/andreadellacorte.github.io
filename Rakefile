require 'html-proofer'

task default: %w[ run ]

task :test do
  sh %{ bundle exec jekyll server >/dev/null 2>&1 & }

  HTMLProofer.check_directory("./_site", {
    :assume_extension => true,
    :empty_alt_ignore => true,
    :typhoeus => {
      :ssl_verifypeer => false
    },
    :http_status_ignore => [ 999 ],
    :url_ignore => [ /amzn.to/ ]
  }).run

  sh %{ pkill -9 jekyll }
end

task :run do
  sh %{ bundle exec 'jekyll server --livereload --drafts' }
end