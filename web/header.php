<?php 
  $url = $_SERVER['REQUEST_URI'];
  $home = false;
  $about = false;
  $login = false;
  switch ($url) {
      case '/index.php':
          $home = true;
          break;
      case '/about.php':
          $about = true;
          break;
      case '/contacts.php':
          $login = true;
          break;
      default:
          $assign = true;
          break;
  }
?>
<header id="mainHeader">
  <h1>Taylor's Homepage</h1>
  <nav>
    <ul>
        <li class="<?php if ($home) echo 'active'  ?>"><a href="/index.php">Home</a></li>
        <li class="<?php if ($assign) echo 'active'  ?>"><a href="/assignments.php">Assignments</a></li>
        <li class="<?php if ($about) echo 'active' ?>"><a href="#">About</a></li>
        <li class="<?php if ($login) echo 'active' ?>"><a href="/contacts.php">Contact</a></li>
    </ul>
  </nav>
</header>

