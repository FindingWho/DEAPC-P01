
<form action="upload.php" method="POST" enctype="multipart/form-data" class="upload">
    <input type="file" name="img" id="imgToUpload">
    <input type="text" name="title" placeholder="title" id="prod-title">
    <input type="number" name="price" id="prod-price" placeholder="Price €">
    <input type="number" name="stock" placeholder="stock" id="prod-stock">
    <input type="number" name="sn" placeholder="SN" id="prod-sn">
    <input type="text" name="desc" placeholder="description" id="prod-desc">
    <input type="submit" value="Upload" name="submit">
</form>
