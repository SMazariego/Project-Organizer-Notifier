
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
    $('#ex1').modal({
        fadeDuration: 250
    });
    $('input[name=subject]').val($('input[name=pname]').val());
    let selectedValues = $('input:checkbox:checked').map(function () {
        return this.name;
    }).get().join(",");
    $('textarea[name=mail-body]').val(selectedValues);


    return false;
});

$('#mail-sending').click(function () {
    let to = $('input[name=mailto]');
    let subject = $('input[name=subject]');
    let body = $('input[name=mail-body]');
    window.open('mailto:'+to+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body));
});










