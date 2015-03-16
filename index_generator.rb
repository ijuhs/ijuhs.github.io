#!ruby

html = '<html><body><ul>'

Dir.glob("**/*") do |f|
    next if f =~ /^(\.|index.html$)/ || FileTest.directory?(f)
    html += "<li><a href=\"#{f}\">#{f}</a> - #{FileTest.size(f)} bytes - #{File.mtime(f)}"
end

html += '</ul></body></html>'
File.write('index.html', html);
