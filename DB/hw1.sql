CREATE TABLE Cliente (
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    cognome VARCHAR(255),
    data_nascita DATE,
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE posts (
    id_post integer primary key auto_increment,
    cliente integer not null,
    time timestamp not null default current_timestamp,
    nlikes integer default 0,
    /* ncomments integer default 0, */
    content json,
    foreign key(cliente) references Cliente(id_user) on delete cascade on update cascade
) Engine = InnoDB;

CREATE TABLE likes (
    idutente integer not null,
    idpost integer not null,
    index utente(idutente),
    index post(idpost),
    foreign key(idutente) references Cliente(id_user) on delete cascade on update cascade,
    foreign key(idpost) references posts(id_post) on delete cascade on update cascade,
    primary key(idutente, idpost)
) Engine = InnoDB;

DELIMITER //
CREATE TRIGGER likes_trigger
AFTER INSERT ON likes
FOR EACH ROW
BEGIN
UPDATE posts 
SET nlikes = nlikes + 1
WHERE id_post = new.idpost;
END //
DELIMITER ;


DELIMITER //
CREATE TRIGGER unlikes_trigger
AFTER DELETE ON likes
FOR EACH ROW
BEGIN
UPDATE posts 
SET nlikes = nlikes - 1
WHERE id_post = old.idpost;
END //
DELIMITER ;

