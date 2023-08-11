-- Tabla clientes
CREATE TABLE clientes (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    cliente VARCHAR(200) NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    nomfantasia VARCHAR(200) NOT NULL,
    localidad VARCHAR(200) NOT NULL,
    provincia VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    cuit VARCHAR(200) NOT NULL,
    tipo VARCHAR(200) NOT NULL,
    postal VARCHAR(200) NOT NULL,
    zona VARCHAR(200) NOT NULL,
    actividad VARCHAR(200) NOT NULL,
    vendedor VARCHAR(200) NOT NULL,
    limite VARCHAR(200) NOT NULL,
    lista VARCHAR(200) NOT NULL,
    personal VARCHAR(200) NOT NULL,
    usuario VARCHAR(200) NOT NULL,
    saldo VARCHAR(200) NOT NULL
);