<?php
$name = $_POST['name'];
$Address = $_POST['address'];
$Email = $_POST['email'];
$Phone = $_POST['phone'];

	$host = "localhost";
	$dbUsername = "root";
	$dbpassword = "";
	$dbname = "fyg";

	$conn = new mysqli($host, $dbUsername, $dbpassword, $dbname);

	if (mysqli_connect_error()){
		die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
	} else {
		$SELECT = "SELECT email From fyg_table Where email = ? Limit 1";
		$INSERT = "INSERT Into fyg_table (name, address, email, phone) values(?,?,?,?)";

		$stmt = $conn->prepare($SELECT);
		$stmt->bind_param("s", $email);
		$stmt->execute();
		$stmt->bind_result($email);
		$stmt->store_result();
		$rnum = $stmt->num_rows;
		if($rnum==0){
			$stmt->close();

			$stmt = $conn->prepare($INSERT);
			$stmt->bind_param("ssss", $name, $Address, $Email, $Phone);
			$stmt->execute();
			echo "you have been registered,now you can send us your gym details on our email-id";
		}else {
			echo "email already been registered";
		}
		$stmt->close();
		$conn->close();
	}

?>
