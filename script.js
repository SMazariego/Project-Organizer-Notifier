
$('input:checkbox').click(function(){
    var tb = "#"+$(this).attr('rel');
    if($(this).is(":checked"))
        $(tb).append(this.name + "\n");

        else($(tb)).removeAttr(":checked");
})



