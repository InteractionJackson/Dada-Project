<?php require_once('./inc/header.php'); ?>
<h1 class="form-signin-heading">DADA SOURCE</h1>
<h2> <a href="#" data-toggle="tooltip" class="link" title="" data-original-title="A European artistic and literary movement (1916-1923) that flouted conventional aesthetic and cultural values by producing works marked by nonsense, travesty, and incongruity">Dada</a> for the Twitter Age: The Size Of A Sales Receipt, And Edited By You</h2>

<form action="vendor/twitteroauth/ajax.php" method="POST" class="form-signin">
	<label for="search">#</label>
	<input id="search" name="search" type="text" placeholder="Hashtag">
	<button type="submit">Search</button>
</form>

<div id="results" class="hidden">
	<ul></ul>
</div>
<div id="wysiwyg" class="hidden">
	<ul id="sortable"></ul>
	<a rel="tooltip" title="Remember, DADA is based on nonsense, travesty, and incongruity... so have fun and drag and drop to you're hearts content!">What do I do?</a>
	<button class="button" type="submit">Next</button>
	<a href="./" class="button resetbutton">Reset</a>
</div>
<?php require_once('./inc/footer.php'); ?>