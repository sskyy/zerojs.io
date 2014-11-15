

$(document).ready(function() {

    $.get('/zero-packages')
     .done(function(data) {
       if(data) {
         delete data._updated

         html = '<nav><ul>'

         for(x in data) {
           if(data.hasOwnProperty(x)) {

             var version = '';
             for (y in data[x].versions) {
               if(data[x].versions.hasOwnProperty(y)) {
                  if (data[x].versions[y] === 'latest') {
                    version = y;
                  }
               }
             }

             var author = data[x].author? data[x].author['name']: 'unknow';

             html += '<li>'
             html += '<div class="package">'
               html += '<h4>' + data[x].name + '</h4>'
               html += '<p class="author-name">By '
                html += '<span class="author">' + author + '</span>'
                html += ' Latest version: <span class="version">' + version + '</span>'
               html += '</p>'
               html += '<div class="description">' + data[x].description
               html += '</div>'
             html += '</div>'
             html += '</li>'
           }
         }

         html += '</ul></nav>'

         $('#packages').html(html)
       }
     })

})
