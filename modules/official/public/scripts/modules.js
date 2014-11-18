

$(document).ready(function() {

    $.get('/zero-packages')
     .done(function(data) {
       if(data) {
         delete data._updated

         html = '<nav><ul class="row collapse">'

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

             html += '<li class="large-4 columns">'
             html += '<div class="package">'
               html += '<h5>' + data[x].name + '</h5>'
               html += '<div class="content">'
                 html += '<div class="description">' + data[x].description
                 html += '</div>'
                 html += '<div class="detail">Author: '
                  html += '<span class="author">' + author + '</span>'
                  html += '<span class="version-wrapper"> Latest version: <span class="version">' + version + '</span></span>'
                 html += '</div>'
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
