
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
            console.clear();
            console.log(data.results);
            let container = $('#article-list')
            $.each(data.results, function(key, value) {
                console.log(value.multimedia[4].url);
                if(value.multimedia[0]==undefined || value.multimedia[0]==null){
                    console.log("Hello");
                }
                console.log(key);
                $('#article-list').append(`

                
                    <li>
                    <div style="background-image:url(${value.multimedia[4].url})">   
                    <a href="">
                            <p>${value.abstract}</p>    
                        </a>
                       </div>
                    </li>
                `);

                
            });// .each
        })
    })
});

