
$('input:checkbox').click(function(){
    var tb = "#"+$(this).attr('rel');
    let text_to_add = this.name + "\n";
    //when click a checkbox and show checked items in the text area
    if($(this).is(":checked")){
        $(tb).append(text_to_add);
    }else{
        let remove = this.name +"\n";
        //when a box is unchecked it clears the previously populated text from checkbox
        $(tb).text(function(i, text){
            return text .replace(text_to_add,'');
        });
    }
        
})



