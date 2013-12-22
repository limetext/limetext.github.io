desc "Give a Title and a category as argument. Create new Page!"
task :write, [:title, :category] do |t, args|
  filename = "#{Time.now.strftime('%Y-%m-%d')}-#{args.title.gsub(/\s/, '_').downcase}.md"
  path = File.join("_posts", filename)
  if File.exist? path; raise RuntimeError.new("Won't clobber #{path}"); end
  File.open(path, 'w') do |file|
    file.write <<-EOS
---
layout: post
title: #{args.title}
date: #{Time.now.strftime('%Y-%m-%d %H:%M:%S')}
category: #{args.category}
---
EOS
    end
    puts "Now open #{path} in an editor."
    system ("#{ENV['EDITOR']} #{path}")
end
