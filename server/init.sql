
-- Fill "User"

insert into "User" ("UserId", "Email", "Password", "Role") values (1, 'user1@mail.com', 'password', 'Client');
insert into "User" ("UserId", "Email", "Password", "Role") values (2, 'user2@mail.com', 'password', 'Client');
insert into "User" ("UserId", "Email", "Password", "Role") values (3, 'user3@mail.com', 'password', 'Client');
insert into "User" ("UserId", "Email", "Password", "Role") values (4, 'user4@mail.com', 'password', 'Client');
insert into "User" ("UserId", "Email", "Password", "Role") values (5, 'user5@mail.com', 'password', 'Client');
insert into "User" ("UserId", "Email", "Password", "Role") values (6, 'user6@mail.com', 'password', 'Client');
insert into "User" ("UserId", "Email", "Password", "Role") values (7, 'user7@mail.com', 'password', 'Musician');
insert into "User" ("UserId", "Email", "Password", "Role") values (8, 'user8@mail.com', 'password', 'Musician');
insert into "User" ("UserId", "Email", "Password", "Role") values (9, 'user9@mail.com', 'password', 'Musician');
insert into "User" ("UserId", "Email", "Password", "Role") values (10, 'user10@mail.com', 'password', 'Host');

-- Fill "Client"

insert into "Client" ("ClientId", "UserId", "ClientAvatar") values (1, 1, 'test_avatar');
insert into "Client" ("ClientId", "UserId", "ClientAvatar") values (2, 2, 'test_avatar');
insert into "Client" ("ClientId", "UserId", "ClientAvatar") values (3, 3, 'test_avatar');
insert into "Client" ("ClientId", "UserId", "ClientAvatar") values (4, 4, 'test_avatar');
insert into "Client" ("ClientId", "UserId", "ClientAvatar") values (5, 5, 'test_avatar');
insert into "Client" ("ClientId", "UserId", "ClientAvatar") values (6, 6, 'test_avatar');

-- Fill "Musician"

insert into "Musician" ("MusicianId", "UserId", "MusicianName", "MusicianAvatar", "MusicianDescription", "MusicianTracks")
values (1, 7, 'Musician1', 'test_avatar', 'musician1 description', '{ "trackName": "soundcloudUrl" }');

insert into "Musician" ("MusicianId", "UserId", "MusicianName", "MusicianAvatar", "MusicianDescription", "MusicianTracks")
values (2, 8, 'Musician2', 'test_avatar', 'musician2 description', '{ "trackName": "soundcloudUrl" }');

insert into "Musician" ("MusicianId", "UserId", "MusicianName", "MusicianAvatar", "MusicianDescription", "MusicianTracks")
values (3, 9, 'Musician3', 'test_avatar', 'musician3 description', '{ "trackName": "soundcloudUrl" }');

-- Fill "Host"

insert into "Host" ("HostId", "UserId", "HostName", "HostAvatar", "HostInterior", "HostCity", "HostAddress", "HostDescription")
values (1, 10, 'Host1', 'test_avatar', '{image_url1, image_url2}', 'Kyiv', 'Kreschatyk', 'host1 description');
