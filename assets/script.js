var searchInput = 'search_input';

$(document).ready(function () {
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
        types: ['geocode'],
    });
    
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var near_place = autocomplete.getPlace();
        document.getElementById('loc_lat').value = near_place.geometry.location.lat();
        document.getElementById('loc_long').value = near_place.geometry.location.lng();
        
        document.getElementById('latitude_view').innerHTML = near_place.geometry.location.lat();
        document.getElementById('longitude_view').innerHTML = near_place.geometry.location.lng();
    });
});  

$(document).on('change', '#'+searchInput, function () {
    document.getElementById('latitude_input').value = '';
    document.getElementById('longitude_input').value = '';
    
    document.getElementById('latitude_view').innerHTML = '';
    document.getElementById('longitude_view').innerHTML = '';
});

let existValue = "";
$('input:checkbox').click(function(){
    var tb = "#"+$(this).attr('rel');
    let text_to_add = this.name + "\n";

    let inputVal = $('#pname').val()
    //when click a checkbox and show checked items in the text area
    if($(this).is(":checked")){
        $(tb).val($(tb).val() + text_to_add);
    }else{
        let remove = this.name +"\n";
        //when a box is unchecked it clears the previously populated text from checkbox
        $(tb).val($(tb).val().replace(remove,""));
    }

    //storing the value to existValue

    existValue = $(tb).val().replace(`${inputVal}\n`, "");
        
});

$('#pname').on('input',(e)=>{
    //here to adding the input value to the existValue
    $('#textbox1').val(`${e.target.value}\n${existValue}`)
});

//modal triggered
$('#submit-temp').click(function (event) {
    $('#exl').modal({
        fadeDuration: 250
    
    });
    $('input[name=subject]').val($('input[name=pname]').val());
    let selectedValues = $('input:checkbox:checked').map(function () {
        return this.name;
    }).get().join(",");
    $('textarea[name=mail-body]').val(selectedValues);


    return false;
});

//email sending
$('#mail-sending').click(function () {
    let to = $('input[name=mailto]');
    let subject = $('input[name=subject]').val();
    let body = $('textarea[name=mail-body]').val();
    //window.open('mailto:'+to+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body));

    emailjs.send("service_swqmzcu","template_1hb9zlf",{
        subject: subject,
        body: body,
    }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Send success\nresponse code is " + response.status);
    }, function(error) {
        console.log('FAILED...', error);
        alert("Send failed\nresponse code is " + error);
    });


});










