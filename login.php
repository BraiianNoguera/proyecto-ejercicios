<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      rel="shortcut icon"
      href="imagenes/logo.jpg"
      type="image/x-icon"/>
    <title>Gymvertz Iniciar Sesión</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="login.css">
</head>
<body>

  <header>
    <nav class="navbar navbar-expand-lg bgnavbar">
      <div class="container-fluid">
        <img src="imagenes/logoimg-removebg-preview.png"alt="logo" style="height: 50px; width: 150px;">
        <!-- <a class="navbar-brand" href="#">GYMVERTZ</a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="calcucalorias.html" target="_blank" >Calculador de Calorias</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
            <button class="btn btn-outline-success btn-secondary text-light btnBuscar" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  </header>

  <div class="container">
    
    <h1>Registrarse</h1>

    <form method="POST">
      <input type="text" name="nombre" placeholder="Nombre completo">
      <input type="email" name="correo" placeholder="Correo electrónico">
      <input type="password" name="contrasena" placeholder="Contraseña">
      <button type="submit" name="register"><a href="index.html">Registrarse</a></button>
    </form>
    <?php
    include("registro.php");
    ?>

    <h1>Iniciar sesión</h1>

    <form action="login.php" method="POST">
      <input type="email" name="correo" placeholder="Correo electrónico" required>
      <input type="password" name="contrasena" placeholder="Contraseña" required>
      <button type="submit" name="login"><a href="index.html">Iniciar Sesión</a></button>
    </form>
  </div>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

</body>
</html>

  
</body>
</html>