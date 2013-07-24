<?php require_once('./inc/header.php'); ?>
<h1 class="form-signin-heading">DADA SOURCE</h1>
<h2> <a href="#" data-toggle="tooltip" class="link" title="" data-original-title="A European artistic and literary movement (1916-1923) that flouted conventional aesthetic and cultural values by producing works marked by nonsense, travesty, and incongruity">Dada</a> for the Twitter Age: The Size Of A Sales Receipt, And Edited By You</h2>

<form action="vendor/twitteroauth/ajax.php" method="POST" class="form-signin">
	<input name="search" type="text" class="input-block-level" placeholder="Search #">
	<button type="submit">Search</button>
</form>

<div id="results" class="hidden">
	<ul></ul>
</div>
<?php require_once('./inc/footer.php'); ?>