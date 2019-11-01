
document.addEventListener('DOMContentLoaded', function (event){
    let tmpSubject;
    // const = $('.loader');
     $('#link').on('change', function(){
        event.preventDefault();
        tmpSubject = $(this).val();
        $.ajax({
            method: 'GET',
            dataType: 'JSON',
            url: 'https://api.nytimes.com/svc/topstories/v2/'+ tmpSubject+'.json?api-key=VBGBP5ATc6Rgv8j8nrYEdyH1zVlNDA8U' 
        })
        //  $('.loader')
        //      .hide()  // Hide it initially
        //      .ajaxStart(function () {
        //          $(this).show();
        //      })
        //      .ajaxStop(function () {
        //          $(this).hide();
        //      })

        .done(function(data){
            console.log(data);

            const slicedResults = data.results.filter(function(articleObj){
                return articleObj.multimedia[4] !== undefined;
            }).slice(0,12);

            $('.article-list').empty();

            let container = $('#article-list')
            $.each(slicedResults, function(key, value) {
                // console.log(value.multimedia[4].url);
                // if(value.multimedia[4]==undefined || value.multimedia[4]==null){
                //     console.log("undefine or empty multimedia");
                //     return;
                // }
                // console.log(value.multimedia[4].url);
                $('.article-list').append(`
                    <li class="article-list-item" style="background-image:url(${value.multimedia[4].url})">
                        <a class="article-page" href="${value.url}" target="_blank">
                            <p class="article">
                                ${value.abstract}
                            </p> 
                        </a> 
                    </li>
                `);
                
                
            });// .each
        })
    })
});


