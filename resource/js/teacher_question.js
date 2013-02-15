function  question_type(num){
	switch(num)
   {
   case 1:
       $("#question_type").attr("data-toggle","buttons-radio")
     break
   case 2:
       $("#question_type").attr("data-toggle","buttons-checkbox")
     break
   default:
     $("#question_type").attr("data-toggle","buttons-radio")
   }
}