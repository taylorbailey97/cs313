CREATE TABLE loginInfo (
    id serial PRIMARY KEY,
    username VARCHAR(50) not null,
    pass VARCHAR(16) not null
);

INSERT INTO loginInfo (username, pass)
VALUES ('admin', 'password');