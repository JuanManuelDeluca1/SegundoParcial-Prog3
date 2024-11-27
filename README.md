DOCUMENTO DE LA API

Esta API es para el manejo de juegos y autores de una tienda, esta puedo CRUD de ambas identidades.
Esta API usa como base de datos mysql que esta conectada atravez de xampp por el puerto 3307.
La base de dato se llama "sparcial" y esta compuesta de 2 tablas. A continuacion dejo el creat
autores
CREATE TABLE autores (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    createdAt DATE,
    updatedAt DATE,
    name VARCHAR(255),
    surname VARCHAR(255)
);
juegos
CREATE TABLE juegos (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    createdAt DATE,
    updatedAt DATE,
    categoria VARCHAR(255),
    disponible TINYINT(1),
    idAutor INT(11)
);
Como pueden ver la tabla juegos tiene la propiedad idAutor que esta relacionada directametne con el id del autor.
Los id de cada indentidad son autos incrementables.
Tambien usa la ultima version de node.js y las siguiente biblotecas de este.
Sequelize
mysql2
ejs
express

Bueno profe espero que le guste la API se que no es nada del otro mundo pero hice el mejor esfuerzo para que ande todo correctamente
Y espero que vea el detalle de que valide el dato de idAutor en la cracion de juegos
