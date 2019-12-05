<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>

<body>
</body>
	<div>
	<span>
	<?php
	include('bnTime.php');
	$time = time();
	//echo $time;
	//echo "<br>";
	$Bdate = BDdate($time);
	echo $Bdate;
	?>
	</span>
	<br>
	<span>
	<?php
	$dt = new DateTime('now', new DateTimezone('Asia/Dhaka'));
	echo $dt->format('F j, Y, g:i a');
	?>
    </span>
	</div>
	
	
</html>