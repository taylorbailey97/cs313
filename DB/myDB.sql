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

INSERT INTO Schedule (sTime)
VALUES (1, '2019-05-28 03:00:00'::TIMESTAMP);
