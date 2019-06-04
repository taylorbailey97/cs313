CREATE TABLE Appointment (
    AppointmentID INT NOT NULL,
    cName VARCHAR(50) NOT NULL,
    pNumber INT NOT NULL,
    ScheduleID int references Schedule(ScheduleID)
);


CREATE TABLE Schedule (
    ScheduleID INT NOT NULL PRIMARY KEY,
    sTime TIMESTAMP NOT NULL
);

INSERT INTO Schedule
VALUES (2, '2019-05-31 04:30:00'::TIMESTAMP);

SELECT * FROM Schedule;

INSERT INTO Appointment 
VALUES (3, 'Alex Brown', '5948379999', 2);

SELECT * FROM Appointment;

