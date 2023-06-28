<?php
include 'db.php';

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $stmt = $conn->prepare("SELECT * FROM score ORDER BY score DESC LIMIT 10");
$stmt->execute();

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
  
echo '<pre>';
print_r($results);
echo '</pre>';
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

$conn = null;
?>