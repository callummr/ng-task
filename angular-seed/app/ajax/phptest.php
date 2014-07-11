<?php
include_once 'config.php';
$query="select list_item_id, list_item_text text, list_item_done done, list_item_due_date dueDate from list_items order by list_item_done, list_item_id desc";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$rows = array();
if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$rows[] = $row;
	}
}

echo json_encode($rows);
?>