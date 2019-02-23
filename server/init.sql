
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

insert into "Client" ("ClientId", "UserId", "ClientAvatar") values (1, 1, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
insert into "Client" ("ClientId", "UserId", "ClientAvatar") values (2, 2, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
insert into "Client" ("ClientId", "UserId", "ClientAvatar") values (3, 3, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
insert into "Client" ("ClientId", "UserId", "ClientAvatar") values (4, 4, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
insert into "Client" ("ClientId", "UserId", "ClientAvatar") values (5, 5, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
insert into "Client" ("ClientId", "UserId", "ClientAvatar") values (6, 6, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');

-- Fill "Musician"

insert into "Musician" ("MusicianId", "UserId", "MusicianName", "MusicianAvatar", "MusicianDescription", "MusicianTracks")
values (1, 7, 'Musician1', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 'musician1 description', '{ "trackName": "soundcloudUrl" }');

insert into "Musician" ("MusicianId", "UserId", "MusicianName", "MusicianAvatar", "MusicianDescription", "MusicianTracks")
values (2, 8, 'Musician2', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 'musician2 description', '{ "trackName": "soundcloudUrl" }');

insert into "Musician" ("MusicianId", "UserId", "MusicianName", "MusicianAvatar", "MusicianDescription", "MusicianTracks")
values (3, 9, 'Musician3', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 'musician3 description', '{ "trackName": "soundcloudUrl" }');

-- Fill "Host"

insert into "Host" ("HostId", "UserId", "HostName", "HostAvatar", "HostInterior", "HostCity", "HostAddress", "HostDescription")
values (1, 10, 'Host1', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '{https://img.gta5-mods.com/q95/images/bar-interior/d2b760-ypagC6j47rc.jpg}', 'Kyiv', 'Kreschatyk', 'host1 description');
