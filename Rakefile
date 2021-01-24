require 'html-proofer'

task default: %w[ run ]

task :test do
  sh %{ bundle exec jekyll build --config '_config.yml,_config.dev.yml' >/dev/null 2>&1 & }

  HTMLProofer.check_directory("./_site", {
    :allow_hash_href => true,
    :assume_extension => true,
    :disable_external => true,
    :empty_alt_ignore => true,
    :parallel => {
      :in_processes => 3
    },
  }).run
end

task :run do
  sh %{ bundle exec 'jekyll serve --livereload --drafts --config "_config.yml,_config.dev.yml"' }
end