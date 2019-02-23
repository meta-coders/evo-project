
-- Fill "User"

insert into "User" ("UserId", "Email", "Password", "Role") values (1, 'user1@mail.com', 'password', 'Client');
insert into "User" ("UserId", "Email", "Password", "Role") values (2, 'user2@mail.com', 'password', 'Client');
insert into "User" ("UserId", "Email", "Password", "Role") values (3, 'user2@mail.com', 'password', 'Client');
insert into "User" ("UserId", "Email", "Password", "Role") values (4, 'user2@mail.com', 'password', 'Client');
insert into "User" ("UserId", "Email", "Password", "Role") values (5, 'user2@mail.com', 'password', 'Client');
insert into "User" ("UserId", "Email", "Password", "Role") values (6, 'user2@mail.com', 'password', 'Client');
insert into "User" ("UserId", "Email", "Password", "Role") values (7, 'user2@mail.com', 'password', 'Musician');
insert into "User" ("UserId", "Email", "Password", "Role") values (8, 'user2@mail.com', 'password', 'Musician');
insert into "User" ("UserId", "Email", "Password", "Role") values (9, 'user2@mail.com', 'password', 'Musician');
insert into "User" ("UserId", "Email", "Password", "Role") values (10, 'user2@mail.com', 'password', 'Host');

-- Fill "Client"

insert into "Client" ("ClientId", "UserId", "Avatar") values (1, 1, 'test_avatar');
insert into "Client" ("ClientId", "UserId", "Avatar") values (2, 2, 'test_avatar');
insert into "Client" ("ClientId", "UserId", "Avatar") values (3, 3, 'test_avatar');
insert into "Client" ("ClientId", "UserId", "Avatar") values (4, 4, 'test_avatar');
insert into "Client" ("ClientId", "UserId", "Avatar") values (5, 5, 'test_avatar');
insert into "Client" ("ClientId", "UserId", "Avatar") values (6, 6, 'test_avatar');

-- Fill "Musician"

insert into "Musician" ("MusicianId", "UserId", "Name", "Avatar", "Description", "Tracks") values (1, 7, 'Musician1', 'test_avatar', 'musician1 description', '{ "trackName": "soundcloudUrl" }');
insert into "Musician" ("MusicianId", "UserId", "Name", "Avatar", "Description", "Tracks") values (2, 8, 'Musician2', 'test_avatar', 'musician2 description', '{ "trackName": "soundcloudUrl" }');
insert into "Musician" ("MusicianId", "UserId", "Name", "Avatar", "Description", "Tracks") values (3, 9, 'Musician3', 'test_avatar', 'musician3 description', '{ "trackName": "soundcloudUrl" }');

-- Fill "Host"

insert into "Host" ("HostId", "UserId", "Name", "Avatar", "Interior", "City", "Address", "Description")
values (1, 10, 'Host1', 'test_avatar', '{image_url1, image_url2}', 'Kyiv', 'Kreschatyk', 'host1 description');
