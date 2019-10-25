let tmpSubject;

document.addEventListener('DOMContentLoaded', function (event){
    $('#link').on('change', function(){
        event.preventDefault();
        tmpSubject = $(this).val();
        $.ajax({
            method: 'GET',
            dataType: 'JSON',
            url: 'https://api.nytimes.com/svc/topstories/v2/'+ tmpSubject+'.json?api-key=VBGBP5ATc6Rgv8j8nrYEdyH1zVlNDA8U' 
        })
        .done(function(data){
            console.clear();
            console.log(data.results);
            let container = $('#article-list')
            $.each(data.results, function(key, value) {
                console.log(value.multimedia[4]).url
                $('#article-list').append
            })
        })
    })
});

