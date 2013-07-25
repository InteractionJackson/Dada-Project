/**
* Redirects the user to another page.
* @param	{String}	location
*/
function redirectPage(location) {
	window.location = location;
};

/**
* Searches for tweets, the adds them to the results.
* @param	{Object}	data
*/
function findTweets(data){
	console.log('Finding tweets...');
	var result = $.parseJSON(data); // Parse the JSON into an Object
	$(".form-signin").addClass("hidden"); // Hide the search form
	$("#results").removeClass("hidden"); // Show the results

	/**
	* Loop through the statuses and append it to the results list.
	*/
	$.each(result["statuses"], function(key, value){
		var result = 	"<li class='result'>"
					+		"<blockquote>" + value["text"] + "</blockquote>"
					+		"<a id='tweet-" + key + "' title='Pick this Tweet' class='btn'>Pick this Tweet</a>"
					+	"</li>";
		$("#results ul").append(result);
	});
};

/**
* @param	{String}	tweet
* @return	{String}	list
*/
function processTweet(tweet){
	var list = [];
	var words = tweet.split(" ");
	for (var i = 0; i < words.length; i++) {
		list = list + '<li class="ui-state-default"><a href="#">' + words[i] + '</a></li>';
	};
	return list;
}

$(document).ready(function() {
	/**
	* Hide the body, then fade in back in.
	*/
	$("body").css("display", "none");
	$("body").fadeIn(2000);

	/**
	* Not sure what this is for, so I'll leave it.
	*/
	$("a.transition").on('click', function(e){
		console.log('Wow, transitions.');
		e.preventDefault();
		$("body").fadeOut(1000, redirectPage(this.href));      
	});

	/**
	* Listen for when the user clicks on
	* the 'Pick this tweet' button.
	*/
	$("body").on('click', '.result a', function(e){
		console.log('Tweet:' + this.id + ' has been selected.');
		e.preventDefault();
		$("#results").addClass("hidden"); // Hide the results
		$("#wysiwyg").removeClass("hidden"); // Show the wysiwyg
		$("#sortable").html(processTweet($(this).parent().find('blockquote').html()));
	});

	/**
	* Tooltip
	*/
	$('a[rel=tooltip]').tooltip({placement: 'bottom'});

	/**
	* Search Options
	* Here will pass a callback, which will be called upon a successfully request.
	*/
	var search_options = {
		success: findTweets
	}

	/**
	* Submit the form via AJAX
	*/
	$(".form-signin").ajaxForm(search_options);

	$(function() {
		$("#sortable").sortable();
		$("#sortable").disableSelection();
	});
});