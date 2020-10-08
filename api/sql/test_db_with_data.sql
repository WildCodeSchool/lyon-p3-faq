#
# TABLE STRUCTURE FOR: categories
#

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `categorie_id` int(9) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `contenu` varchar(255) NOT NULL,
  `cover` varchar(255) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `disabled_by` int(11) NOT NULL,
  `disabled_at` date NOT NULL,
  PRIMARY KEY (`categorie_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

INSERT INTO `categories` (`categorie_id`, `titre`, `contenu`, `cover`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (1, 'Necessitatibus consequatur neque animi vero expedita.', 'Edwin and Morcar, the earls of Mercia and Northumbria, declared for him: and even Stigand, the patriotic archbishop of Canterbury, found it very nice, (it had, in fact, I didn\'t know that you\'re.', 'http://lorempixel.com/640/480/', 2, '2002-11-30', 7, '1981-03-10');
INSERT INTO `categories` (`categorie_id`, `titre`, `contenu`, `cover`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (2, 'Ut tenetur eius officiis quia nostrum numquam voluptatem.', 'Mock Turtle\'s heavy sobs. Lastly, she pictured to herself in a low, weak voice. \'Now, I give it up,\' Alice replied: \'what\'s the answer?\' \'I haven\'t the least idea what a wonderful dream it had grown.', 'http://lorempixel.com/640/480/', 8, '2009-07-24', 8, '1985-05-28');
INSERT INTO `categories` (`categorie_id`, `titre`, `contenu`, `cover`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (3, 'Omnis doloribus inventore quidem.', 'Dodo, pointing to the Queen, who was reading the list of the goldfish kept running in her head, she tried her best to climb up one of them even when they met in the flurry of the shepherd boy--and.', 'http://lorempixel.com/640/480/', 1, '1979-06-08', 2, '1993-01-22');
INSERT INTO `categories` (`categorie_id`, `titre`, `contenu`, `cover`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (4, 'Incidunt laboriosam et voluptas nulla.', 'I THINK; or is it twelve? I--\' \'Oh, don\'t bother ME,\' said Alice loudly. \'The idea of having the sentence first!\' \'Hold your tongue!\' added the Gryphon; and then another confusion of voices--\'Hold.', 'http://lorempixel.com/640/480/', 9, '1976-07-20', 2, '1996-05-28');
INSERT INTO `categories` (`categorie_id`, `titre`, `contenu`, `cover`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (5, 'Nihil voluptatibus occaecati sit laudantium eos velit suscipit.', 'Multiplication Table doesn\'t signify: let\'s try Geography. London is the same as they came nearer, Alice could speak again. In a little pattering of feet in a thick wood. \'The first thing I\'ve got.', 'http://lorempixel.com/640/480/', 2, '2020-06-02', 7, '1973-03-26');
INSERT INTO `categories` (`categorie_id`, `titre`, `contenu`, `cover`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (6, 'Iste et inventore nisi quos.', 'However, on the breeze that followed them, the melancholy words:-- \'Soo--oop of the table, but it just now.\' \'It\'s the stupidest tea-party I ever was at the door--I do wish I hadn\'t gone down that.', 'http://lorempixel.com/640/480/', 6, '1972-02-07', 5, '2008-08-17');
INSERT INTO `categories` (`categorie_id`, `titre`, `contenu`, `cover`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (7, 'Voluptatem quibusdam atque voluptatem culpa et quos et quas.', 'Alice looked at it, and on it but tea. \'I don\'t quite understand you,\' she said, \'for her hair goes in such a thing I know. Silence all round, if you were INSIDE, you might do very well to introduce.', 'http://lorempixel.com/640/480/', 10, '1999-05-21', 1, '1974-01-18');
INSERT INTO `categories` (`categorie_id`, `titre`, `contenu`, `cover`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (8, 'Cumque et occaecati omnis laborum praesentium quis.', 'Bill,\' she gave one sharp kick, and waited to see if she had never had fits, my dear, I think?\' he said to the little door into that lovely garden. I think you\'d take a fancy to herself \'This is.', 'http://lorempixel.com/640/480/', 3, '2005-01-06', 4, '1970-08-02');
INSERT INTO `categories` (`categorie_id`, `titre`, `contenu`, `cover`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (9, 'Voluptatem qui soluta dolores aliquam voluptas laborum.', 'Alice! when she had asked it aloud; and in another moment it was very like a mouse, That he met in the distance would take the place of the room again, no wonder she felt sure she would catch a bat,.', 'http://lorempixel.com/640/480/', 1, '1987-11-10', 3, '2004-11-29');
INSERT INTO `categories` (`categorie_id`, `titre`, `contenu`, `cover`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (10, 'Non saepe dignissimos aliquid blanditiis.', 'CHAPTER IX. The Mock Turtle yet?\' \'No,\' said the Hatter: \'it\'s very rude.\' The Hatter was the Cat remarked. \'Don\'t be impertinent,\' said the Caterpillar. Alice said to herself; \'I should have.', 'http://lorempixel.com/640/480/', 4, '2006-08-19', 1, '2009-04-22');


#
# TABLE STRUCTURE FOR: question
#

DROP TABLE IF EXISTS `question`;

CREATE TABLE `question` (
  `question_id` int(9) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `contenu` varchar(255) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `disabled_by` int(11) NOT NULL,
  `disabled_at` date NOT NULL,
  PRIMARY KEY (`question_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

INSERT INTO `question` (`question_id`, `titre`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (1, 'Quis voluptatem doloremque in dolorem.', 'She had just begun \'Well, of all her fancy, that: he hasn\'t got no business of MINE.\' The Queen had only one who got any advantage from the shock of being such a curious feeling!\' said Alice; \'all I.', 1, '2001-02-16', 5, '2013-05-17');
INSERT INTO `question` (`question_id`, `titre`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (2, 'Qui officiis voluptates quia odit eos.', 'Alice think it would be grand, certainly,\' said Alice, \'a great girl like you,\' (she might well say that \"I see what was the first question, you know.\' \'And what are YOUR shoes done with?\' said the.', 1, '2007-05-11', 10, '1982-04-24');
INSERT INTO `question` (`question_id`, `titre`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (3, 'Inventore et architecto et quam commodi iure dolores.', 'Lobster; I heard him declare, \"You have baked me too brown, I must have got into the air off all its feet at the house, \"Let us both go to law: I will just explain to you how the Dodo managed it.).', 10, '2001-04-04', 6, '2012-03-23');
INSERT INTO `question` (`question_id`, `titre`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (4, 'Ut sit dignissimos accusantium cum veritatis minima atque voluptates.', 'Pigeon; \'but I know who I WAS when I find a number of cucumber-frames there must be!\' thought Alice. One of the baby, it was too dark to see its meaning. \'And just as well be at school at once.\'.', 5, '1993-04-13', 10, '1993-08-13');
INSERT INTO `question` (`question_id`, `titre`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (5, 'Voluptates saepe dolorum et.', 'Bill had left off writing on his flappers, \'--Mystery, ancient and modern, with Seaography: then Drawling--the Drawling-master was an old Crab took the cauldron of soup off the top of the court. (As.', 10, '2007-08-12', 1, '1970-05-19');
INSERT INTO `question` (`question_id`, `titre`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (6, 'Optio error fugit at et exercitationem quis enim similique.', 'March Hare was said to herself. \'I dare say you never tasted an egg!\' \'I HAVE tasted eggs, certainly,\' said Alice hastily; \'but I\'m not looking for eggs, I know all the time she had been looking.', 1, '2018-06-25', 4, '1995-03-04');
INSERT INTO `question` (`question_id`, `titre`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (7, 'Quam eum voluptates suscipit repellendus.', 'Heads below!\' (a loud crash)--\'Now, who did that?--It was Bill, I fancy--Who\'s to go down the middle, being held up by wild beasts and other unpleasant things, all because they WOULD go with Edgar.', 4, '1975-10-03', 10, '2010-02-05');
INSERT INTO `question` (`question_id`, `titre`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (8, 'Ex dolores dolor dolorum.', 'She waited for a minute or two she stood still where she was getting so thin--and the twinkling of the bottle was a queer-shaped little creature, and held it out to the company generally, \'You are.', 1, '1974-12-16', 2, '1979-10-15');
INSERT INTO `question` (`question_id`, `titre`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (9, 'Nesciunt est illo totam maiores eum facilis reprehenderit.', 'Alice; \'but a grin without a grin,\' thought Alice; \'I daresay it\'s a French mouse, come over with William the Conqueror.\' (For, with all her fancy, that: they never executes nobody, you know. Come.', 1, '1994-08-19', 1, '1990-11-10');
INSERT INTO `question` (`question_id`, `titre`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (10, 'Ut corporis cumque architecto expedita quas sed nostrum.', 'Alice after it, \'Mouse dear! Do come back with the dream of Wonderland of long ago: and how she would keep, through all her knowledge of history, Alice had not long to doubt, for the hot day made.', 9, '1978-04-30', 7, '2001-03-10');


#
# TABLE STRUCTURE FOR: reponse
#

DROP TABLE IF EXISTS `reponse`;

CREATE TABLE `reponse` (
  `reponse_id` int(9) NOT NULL AUTO_INCREMENT,
  `question_id` int(9) NOT NULL,
  `contenu` varchar(255) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `disabled_by` int(11) NOT NULL,
  `disabled_at` date NOT NULL,
  PRIMARY KEY (`reponse_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

INSERT INTO `reponse` (`reponse_id`, `question_id`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (1, 4, 'Rabbit, and had no reason to be in before the trial\'s begun.\' \'They\'re putting down their names,\' the Gryphon replied rather crossly: \'of course you don\'t!\' the Hatter hurriedly left the court,.', 2, '1996-07-18', 2, '1994-11-08');
INSERT INTO `reponse` (`reponse_id`, `question_id`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (2, 9, 'I must have been changed for any of them. \'I\'m sure those are not the right height to rest herself, and began to cry again, for she had been (Before she had nothing yet,\' Alice replied in a whisper,.', 1, '1983-07-21', 3, '2006-01-08');
INSERT INTO `reponse` (`reponse_id`, `question_id`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (3, 10, 'And how odd the directions will look! ALICE\'S RIGHT FOOT, ESQ. HEARTHRUG, NEAR THE FENDER, (WITH ALICE\'S LOVE). Oh dear, what nonsense I\'m talking!\' Just then her head through the glass, and she.', 4, '1980-05-19', 3, '1997-07-07');
INSERT INTO `reponse` (`reponse_id`, `question_id`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (4, 2, 'Caucus-race.\' \'What IS the fun?\' said Alice. \'Come, let\'s hear some of them were animals, and some of YOUR business, Two!\' said Seven. \'Yes, it IS his business!\' said Five, in a ring, and begged the.', 10, '2002-07-29', 3, '2002-07-05');
INSERT INTO `reponse` (`reponse_id`, `question_id`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (5, 7, 'Hatter said, turning to Alice again. \'No, I didn\'t,\' said Alice: \'three inches is such a puzzled expression that she tipped over the fire, licking her paws and washing her face--and she is of.', 2, '1990-04-17', 10, '2007-06-23');
INSERT INTO `reponse` (`reponse_id`, `question_id`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (6, 3, 'Mouse in the newspapers, at the bottom of a feather flock together.\"\' \'Only mustard isn\'t a letter, after all: it\'s a set of verses.\' \'Are they in the world! Oh, my dear Dinah! I wonder if I\'ve kept.', 1, '1989-12-05', 8, '2009-03-17');
INSERT INTO `reponse` (`reponse_id`, `question_id`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (7, 3, 'I suppose?\' said Alice. \'Then it doesn\'t understand English,\' thought Alice; \'I can\'t help it,\' she thought, and it was very uncomfortable, and, as a boon, Was kindly permitted to pocket the spoon:.', 4, '1992-03-30', 3, '2011-08-30');
INSERT INTO `reponse` (`reponse_id`, `question_id`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (8, 4, 'Down, down, down. There was a dead silence instantly, and neither of the song, she kept on puzzling about it in a confused way, \'Prizes! Prizes!\' Alice had not attended to this mouse? Everything is.', 2, '1988-12-28', 2, '2020-07-25');
INSERT INTO `reponse` (`reponse_id`, `question_id`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (9, 5, 'I could show you our cat Dinah: I think that will be When they take us up and beg for its dinner, and all her riper years, the simple rules their friends had taught them: such as, that a moment\'s.', 5, '2007-01-14', 3, '1994-09-22');
INSERT INTO `reponse` (`reponse_id`, `question_id`, `contenu`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (10, 6, 'I\'d only been the whiting,\' said the Footman, and began to say a word, but slowly followed her back to yesterday, because I was going to leave off being arches to do THAT in a tone of great dismay,.', 5, '1973-07-22', 1, '1972-05-28');


#
# TABLE STRUCTURE FOR: role
#

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
  `role_id` int(9) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

INSERT INTO `role` (`role_id`, `nom`) VALUES (1, 'velit');
INSERT INTO `role` (`role_id`, `nom`) VALUES (2, 'commodi');
INSERT INTO `role` (`role_id`, `nom`) VALUES (3, 'eaque');
INSERT INTO `role` (`role_id`, `nom`) VALUES (4, 'distinctio');
INSERT INTO `role` (`role_id`, `nom`) VALUES (5, 'voluptates');
INSERT INTO `role` (`role_id`, `nom`) VALUES (6, 'et');
INSERT INTO `role` (`role_id`, `nom`) VALUES (7, 'quis');
INSERT INTO `role` (`role_id`, `nom`) VALUES (8, 'consequuntur');
INSERT INTO `role` (`role_id`, `nom`) VALUES (9, 'reiciendis');
INSERT INTO `role` (`role_id`, `nom`) VALUES (10, 'quibusdam');


#
# TABLE STRUCTURE FOR: tags
#

DROP TABLE IF EXISTS `tags`;

CREATE TABLE `tags` (
  `tag_id` int(9) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `disabled_by` int(11) NOT NULL,
  `disabled_at` date NOT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

INSERT INTO `tags` (`tag_id`, `nom`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (1, 'sint', 5, '1997-10-02', 5, '2013-04-06');
INSERT INTO `tags` (`tag_id`, `nom`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (2, 'et', 3, '2006-01-19', 4, '1970-01-06');
INSERT INTO `tags` (`tag_id`, `nom`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (3, 'omnis', 3, '1983-01-07', 1, '2011-05-16');
INSERT INTO `tags` (`tag_id`, `nom`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (4, 'labore', 10, '2016-01-19', 7, '2010-04-13');
INSERT INTO `tags` (`tag_id`, `nom`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (5, 'rerum', 1, '1983-08-17', 1, '1995-11-20');
INSERT INTO `tags` (`tag_id`, `nom`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (6, 'nihil', 5, '1972-03-01', 6, '1974-09-22');
INSERT INTO `tags` (`tag_id`, `nom`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (7, 'corrupti', 5, '2004-12-31', 2, '1993-06-22');
INSERT INTO `tags` (`tag_id`, `nom`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (8, 'veniam', 2, '2010-10-21', 7, '1986-07-19');
INSERT INTO `tags` (`tag_id`, `nom`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (9, 'rerum', 7, '2000-05-05', 2, '1988-11-26');
INSERT INTO `tags` (`tag_id`, `nom`, `created_by`, `created_at`, `disabled_by`, `disabled_at`) VALUES (10, 'consequatur', 1, '1974-01-23', 3, '1976-12-04');


#
# TABLE STRUCTURE FOR: user
#

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int(9) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `role_id` int(11) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `ip_adress` int(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

INSERT INTO `user` (`user_id`, `name`, `role_id`, `mail`, `pass`, `ip_adress`) VALUES (1, 'voluptatem', 1, 'sbaumbach@example.net', '#00dd33', 216157);
INSERT INTO `user` (`user_id`, `name`, `role_id`, `mail`, `pass`, `ip_adress`) VALUES (2, 'nihil', 5, 'hchamplin@example.org', '#006611', 592);
INSERT INTO `user` (`user_id`, `name`, `role_id`, `mail`, `pass`, `ip_adress`) VALUES (3, 'velit', 3, 'fblick@example.net', '#003322', 64164);
INSERT INTO `user` (`user_id`, `name`, `role_id`, `mail`, `pass`, `ip_adress`) VALUES (4, 'debitis', 10, 'hayden.tromp@example.com', '#005522', 142224);
INSERT INTO `user` (`user_id`, `name`, `role_id`, `mail`, `pass`, `ip_adress`) VALUES (5, 'molestias', 2, 'hayes.alayna@example.com', '#008800', 94164);
INSERT INTO `user` (`user_id`, `name`, `role_id`, `mail`, `pass`, `ip_adress`) VALUES (6, 'dicta', 7, 'hertha.parker@example.net', '#0099dd', 22169);
INSERT INTO `user` (`user_id`, `name`, `role_id`, `mail`, `pass`, `ip_adress`) VALUES (7, 'est', 8, 'mallie44@example.org', '#0088ee', 199183);
INSERT INTO `user` (`user_id`, `name`, `role_id`, `mail`, `pass`, `ip_adress`) VALUES (8, 'ab', 3, 'tyreek85@example.net', '#00ff11', 102188);
INSERT INTO `user` (`user_id`, `name`, `role_id`, `mail`, `pass`, `ip_adress`) VALUES (9, 'quos', 7, 'rocio72@example.org', '#003388', 166157);
INSERT INTO `user` (`user_id`, `name`, `role_id`, `mail`, `pass`, `ip_adress`) VALUES (10, 'quaerat', 6, 'reichert.eulalia@example.com', '#008833', 31113);


#
# TABLE STRUCTURE FOR: vote
#

DROP TABLE IF EXISTS `vote`;

CREATE TABLE `vote` (
  `vote_id` int(9) NOT NULL AUTO_INCREMENT,
  `user_id` int(9) NOT NULL,
  `vote_value` int(1) NOT NULL,
  `reponse_id` int(11) NOT NULL,
  `ip_adress` int(11) NOT NULL,
  PRIMARY KEY (`vote_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

INSERT INTO `vote` (`vote_id`, `user_id`, `vote_value`, `reponse_id`, `ip_adress`) VALUES (1, 3, 0, 5, 2869);
INSERT INTO `vote` (`vote_id`, `user_id`, `vote_value`, `reponse_id`, `ip_adress`) VALUES (2, 7, 0, 3, 1778);
INSERT INTO `vote` (`vote_id`, `user_id`, `vote_value`, `reponse_id`, `ip_adress`) VALUES (3, 9, 0, 2, 7414);
INSERT INTO `vote` (`vote_id`, `user_id`, `vote_value`, `reponse_id`, `ip_adress`) VALUES (4, 6, 0, 9, 40254);
INSERT INTO `vote` (`vote_id`, `user_id`, `vote_value`, `reponse_id`, `ip_adress`) VALUES (5, 1, 0, 5, 21660);
INSERT INTO `vote` (`vote_id`, `user_id`, `vote_value`, `reponse_id`, `ip_adress`) VALUES (6, 5, 1, 3, 10780);
INSERT INTO `vote` (`vote_id`, `user_id`, `vote_value`, `reponse_id`, `ip_adress`) VALUES (7, 5, 1, 8, 17847);
INSERT INTO `vote` (`vote_id`, `user_id`, `vote_value`, `reponse_id`, `ip_adress`) VALUES (8, 10, 1, 6, 251216);
INSERT INTO `vote` (`vote_id`, `user_id`, `vote_value`, `reponse_id`, `ip_adress`) VALUES (9, 7, 0, 2, 7611);
INSERT INTO `vote` (`vote_id`, `user_id`, `vote_value`, `reponse_id`, `ip_adress`) VALUES (10, 2, 1, 9, 24969);


