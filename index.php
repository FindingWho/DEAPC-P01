<?php require_once('assets/init.php'); ?>

<body>
    <?php require_once('assets/headernav.php'); ?>

    <div class="hero owl-carousel owl-theme">
        <div class="item">
            <img src="images/something.jpeg" alt=""> 
        </div>
        <div class="item">
            <img src="images/stock camera 2.jpeg" alt=""> 
        </div>
        <div class="item">
            <img src="images/stock camera.jpeg" alt=""> 
        </div>
    </div> <!-- hero  -->

    <div class="featured-products container">
        <?php //for i=0;i=10? ... fetch from database ...  ?>
        <div class="product">
            <img src="images/computer.jpg" alt="testing">
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
        </div>
    </div>
    <?php require_once('assets/footer.php') ?>
</body>
</html>