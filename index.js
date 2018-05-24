const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ <?php
	$title = 'Statewide Database | Updates';
	$mainCSS = 1;
	$tableCSS = 0;
	require_once('include/linkPath_final.php');
	require_once($linkToHeader);
	require_once("updates.php");
?>

<!-- To add a new update, go to updates.php! -->

<div id='content'>
	<h1>Latest Updates</h1>
	<div class="row body carousel-container">
		<div class="col">
	 		<div class="row carousel-body">
	 			<div class="carousel-content">
	 				<?php
	 					foreach ($updates as $value) {
	 						echo $value;
	 					}
	 				?>
		 		</div>
	 		</div>
	 	</div>
	</div>
</div>

<?php require_once($linkToFooter); ?>
 });
});
//dynamic port binding. Tells the server if we don't have another port idr 5000
var PORT_NUMBER = process.env.PORT || 5000;
app.listen(PORT_NUMBER);
