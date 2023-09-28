<?php
    include("con_db.php");

    if (isset($_POST['registro'])) {
        if (strlen($_POST['nombre']) >=1 && strlen($_POST['email']) >=1 && strlen($_POST['contrasena']) >=1) {
            $nombre = $_POST['nombre'];
            $email = $_POST['email'];
            $fechareg = date("d/m/y");
            $contraseña = $_POST['contrasena'];
            $consulta = "INSERT INTO datos(nombre, email, contrasena, fechareg) VALUES ('$nombre','$email','$contrasena','$fechareg')";
            $resultado = mysqli_query($conex,$consulta);
            if ($resultado) {
                ?>
                <h3>¡Usuario registrado correctamente!</h3>
                <?php
            }
             else{
                ?>
                <h3>¡Ha ocurrido un error!</h3>
                <?php
            }
        } 
        else{
            ?>
                <h3>¡Por favor complete los datos!</h3>
                <?php
        }
    }

?>