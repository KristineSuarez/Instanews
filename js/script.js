// let tmpSubject;

document.addEventListener('DOMContentLoaded', function (event){
    $('#link').on('change', function(){
        event.preventDefault();
        // tmpSubject = $(this).val();
        $.ajax({
            method: 'GET',
            // dataType: 'JSON',
            url: 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=VBGBP5ATc6Rgv8j8nrYEdyH1zVlNDA8U' 
        })
        .done(function(data){
            console.log(data.results);
            let container = $('#article-list')
            $.each(data.results, function(key, value) {
                console.log(value)
                $('#article-list').append
            })
        })
    })
});

