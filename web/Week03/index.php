<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Week 03 - Taylor Bailey</title>
    <link rel="stylesheet" href="../styles/main.css">
    <link rel="stylesheet" href="../styles/week03.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
</head>
<?php
    $conn = pg_connect("host=ec2-23-23-228-132.compute-1.amazonaws.com port=5432 dbname=d1g7jofa0mrt6 user=uozkdeksbhmesl password=81aa8d0de1d48951ad31620a590cff1c5710020804ba145bac9a4f039e65d077");
    $results = pg_query($conn, "select * from Appointment");
?>
<body>
    <?php include '../header.php'; ?>
        <div class="assign-page">
            <h1>Hello, this is working</h1>
            <?php
                while ($row = pg_fetch_row($results)) {
                    $schedule = pg_query($conn, "select * FROM Schedule WHERE ScheduleID=" . $row[3]);
                    $schResult = pg_fetch_row($schedule);
                    echo 
                    '<section class="results">
                        <h3>' . $row[1] .'<h3><br>
                        <p>' . $row[2] .'</p>
                        <p>' . $schResult[1] . '</p>
                    </section>';
                }
            ?>
        </div>
    <?php include '../footer.php'; ?>
</body>
</html>