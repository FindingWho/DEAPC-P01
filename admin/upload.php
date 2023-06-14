<?php
    include('../connect.php');
    if (isset($_POST['submit'])) {
        $file = $_FILES['img'];
        $filename = $_FILES['img']['name'];
        $fileTmpName = $_FILES['img']['tmp_name'];
        $fileSize = $_FILES['img']['size'];
        $fileError = $_FILES['img']['error'];
        $fileType = $_FILES['img']['type']; 
        $fileExt = explode('.', $filename);
        $fileActualExt = strtolower(end($fileExt));

        $title = $_POST['title'];
        $price = $_POST['price'];
        $stock = $_POST['stock'];
        $sn = $_POST['sn'];
        $desc = $_POST['desc'];

        $allowed = array('jpg', 'jpeg', 'png');

        

        if (in_array($fileActualExt, $allowed)) {
            if ($fileError === 0) {
                if ($fileSize < 16777215) {
                    $fileNameNew = uniqid('', true).".".$fileActualExt;
                    $sql = "INSERT INTO product (title, price, image, stock, sn, descri) VALUES ('$title', '$price', '$fileTmpName', '$stock', '$sn', '$desc')";

                    if (mysqli_query($conn, $sql)){
                        echo '<script> alert("Success")</script>';
                        header("Location: index.php?uploadsuccess");
                    } else {

                    }
                    
                    
                } else {
                    echo "Your file is too POWERFUL";
                }
            } else {
                echo "There was an error uploading your file!";
            }
        } else {
            echo "You cannot files of this type";
        }
    }
?>