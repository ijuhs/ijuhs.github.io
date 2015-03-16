#!ruby

def output_dir(argv, html)
  Dir.foreach(argv) do |f|
    next if f =~ /^(\.)/
    p = File.join(argv, f)
    if FileTest.directory?(p)
      output_dir(p, html)
    else
      html[0] += "<li><a href=\"#{p}\">#{p}</a> - #{FileTest.size(p)} bytes - #{File.mtime(p)}"
    end
  end
end

html = ['<html><body><ul>']
(ARGV.size == 0 ? ['.'] : ARGV).each {|a| output_dir(a, html)}
html[0] += '</ul></body></html>'
File.write('index.html', html[0]);
