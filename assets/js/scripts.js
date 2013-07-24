$(document).ready(function() {

	// Fade in
	 $("body").css("display", "none");
	 $("body").fadeIn(2000);


	 $("a.transition").click(function(event){
			 event.preventDefault();
			 linkLocation = this.href;
			 $("body").fadeOut(1000, redirectPage);      
	 });
	 function redirectPage() {
			 window.location = linkLocation;
	 };

	 // Tooltip
	 $('.link').tooltip();

	 // Twitter search
	 var search_options = {
		success: successFunction
	 }

	 $(".form-signin").ajaxForm(search_options);

	 function successFunction(data){
		var result = $.parseJSON(data);
		$(".form-signin").addClass("hidden");
		$("#results").removeClass("hidden");
		$.each(result["statuses"],function(key,value){
			$("#results ul").append("<li class='result'><blockquote>"+value["text"]+"</blockquote><a id='tweet-" + key + "' href='#' title='Pick this Tweet' class='btn'>Pick this Tweet</a></li>");
		});
	 }

});