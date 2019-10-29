
document.addEventListener('DOMContentLoaded', function (event){
    let tmpSubject;
     $('#link').on('change', function(){
        event.preventDefault();
        tmpSubject = $(this).val();
        $.ajax({
            method: 'GET',
            dataType: 'JSON',
            url: 'https://api.nytimes.com/svc/topstories/v2/'+ tmpSubject+'.json?api-key=VBGBP5ATc6Rgv8j8nrYEdyH1zVlNDA8U' 
        })
        .done(function(data){
            console.log(data);
            // $('#article-list').slice(0, 12);
            // const results = data.results.slice(0, 12);
            // $('#article-list').empty();


            const slicedResults = data.results.slice(0,12);

            console.clear();
            // console.log(data.results);
            let container = $('#article-list')
            $.each(slicedResults, function(key, value) {
                // console.log(value.multimedia[4].url);
                if(value.multimedia[4]==undefined || value.multimedia[4]==null){
                    console.log("undefine or empty multimedia");
                    return;
                }
                console.log(value.multimedia[4].url);
                $('#article-list').append(`
                    <li class="article-list-item" style="background-image:url(${value.multimedia[4].url})">
                    
                    <a href="${value.url}" target="_blank">
                            <p>${value.abstract}</p>    
                        </a>
                      
                    </li>
                `);
                // ${value.abstract}
                
            });// .each
        })
    })
});


            // $(this).timeout=3000;
            // $(data.results).slice(0,12);
