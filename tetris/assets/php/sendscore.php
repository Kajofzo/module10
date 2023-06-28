<?php
include 'db.php';
header('Access-Control-Allow-Origin: *'); 
header("Content-Type: application/json; charset=UTF-8");

$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content, true);

if(!empty($decoded['name']) && !empty($decoded['score'])) {
  
    $name = $decoded['name'];
    $score = $decoded['score'];
    try {
      $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      
      
      $stmt = $conn->prepare("SELECT id FROM players WHERE name='" . $name . "'");
      $stmt->execute();
      $stmt = $conn->prepare("INSERT INTO score (`player_id`, `score`) VALUES ('". $id ."', '" . $score . "')");
      $stmt->execute();

$id = $stmt->fetch(PDO::FETCH_ASSOC)['id'];
   
    } catch(PDOException $e) {
      echo json_encode(['error' => 'cannot add to database']);
    }
    $conn = null;
  
  }else{
    echo json_encode(['error' => 'invalid JSON']);
  }



$conn = null;