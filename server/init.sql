
-- Fill "user"

INSERT INTO "user" (user_id, email, password, role) VALUES (1, 'user1@mail.com', 'password', 'Client');
INSERT INTO "user" (user_id, email, password, role) VALUES (2, 'user2@mail.com', 'password', 'Client');
INSERT INTO "user" (user_id, email, password, role) VALUES (3, 'user3@mail.com', 'password', 'Client');
INSERT INTO "user" (user_id, email, password, role) VALUES (4, 'user4@mail.com', 'password', 'Client');
INSERT INTO "user" (user_id, email, password, role) VALUES (5, 'user5@mail.com', 'password', 'Client');
INSERT INTO "user" (user_id, email, password, role) VALUES (6, 'user6@mail.com', 'password', 'Client');
INSERT INTO "user" (user_id, email, password, role) VALUES (7, 'user7@mail.com', 'password', 'Musician');
INSERT INTO "user" (user_id, email, password, role) VALUES (8, 'user8@mail.com', 'password', 'Musician');
INSERT INTO "user" (user_id, email, password, role) VALUES (9, 'user9@mail.com', 'password', 'Musician');
INSERT INTO "user" (user_id, email, password, role) VALUES (10, 'user10@mail.com', 'password', 'Host');

-- Fill client

INSERT INTO client (client_id, user_id, client_avatar) VALUES (1, 1, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
INSERT INTO client (client_id, user_id, client_avatar) VALUES (2, 2, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
INSERT INTO client (client_id, user_id, client_avatar) VALUES (3, 3, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
INSERT INTO client (client_id, user_id, client_avatar) VALUES (4, 4, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
INSERT INTO client (client_id, user_id, client_avatar) VALUES (5, 5, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
INSERT INTO client (client_id, user_id, client_avatar) VALUES (6, 6, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');

-- Fill musician

INSERT INTO musician (musician_id, user_id, musician_name, musician_avatar, musician_description, musician_tracks)
VALUES (1, 7, 'Musician1', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 'musician1 description', '{ "trackName": "soundcloudUrl" }');

INSERT INTO musician (musician_id, user_id, musician_name, musician_avatar, musician_description, musician_tracks)
VALUES (2, 8, 'Musician2', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 'musician2 description', '{ "trackName": "soundcloudUrl" }');

INSERT INTO musician (musician_id, user_id, musician_name, musician_avatar, musician_description, musician_tracks)
VALUES (3, 9, 'Musician3', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 'musician3 description', '{ "trackName": "soundcloudUrl" }');

-- Fill "Host"

INSERT INTO host (
  host_id,
  user_id,
  host_name,
  host_avatar,
  host_interior,
  host_city,
  host_address,
  host_description
) VALUES (
  1,
  10,
  'Host1',
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', '{https://img.gta5-mods.com/q95/images/bar-interior/d2b760-ypagC6j47rc.jpg}',
  'Kyiv',
  'Kreschatyk',
  'host1 description'
);
