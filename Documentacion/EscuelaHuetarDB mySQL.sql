Create Database escuelaHuetarDB
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE escuelaHuetarDB;

CREATE TABLE persona (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    cedula VARCHAR(20) NOT NULL UNIQUE,
    nacionalidad VARCHAR(50)
);

###Preescolar, Primaria
CREATE TABLE gradoEscolar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    grado VARCHAR(20) NOT NULL,
    capacidad INT,
    seccion VARCHAR(10)
);

CREATE TABLE responsable (
    id INT PRIMARY KEY,
    parentesco VARCHAR(50),
    telefono VARCHAR(20),

    FOREIGN KEY (id) REFERENCES persona(id)
        ON DELETE CASCADE
);

CREATE TABLE encargado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    responsableId INT NOT NULL,
    estadoCivil VARCHAR(50),
    ocupacion VARCHAR(100),
    direccion VARCHAR(255),

    FOREIGN KEY (responsableId) REFERENCES responsable(id)
        ON DELETE CASCADE
);

CREATE TABLE estudiante (
    id INT PRIMARY KEY,
    fechaNacimiento DATE,
    sexo VARCHAR(20),
    padecimientos VARCHAR(255),
    hermanosEstudiantes BOOLEAN,
    vacunasCompletas BOOLEAN,
    beca VARCHAR(100),
    traslado BOOLEAN,
    repitente BOOLEAN,
    gradoEscolarId INT,
	encargadoId INT UNIQUE,

    FOREIGN KEY (id) REFERENCES persona(id)
	ON DELETE CASCADE,
    
	FOREIGN KEY (gradoEscolarId) REFERENCES gradoEscolar(id)
	ON DELETE SET NULL,
        
	FOREIGN KEY (encargadoId) REFERENCES encargado(id)
    ON DELETE SET NULL
);

CREATE TABLE funcionario (
    id INT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    rol VARCHAR(50) NOT NULL,
    correo VARCHAR(100),
    contrasena VARCHAR(255) NOT NULL,
    estado BOOLEAN DEFAULT TRUE,

    FOREIGN KEY (id) REFERENCES persona(id)
        ON DELETE CASCADE
);

###Tabla para todos los responsables de un estudiante
CREATE TABLE estudiante_responsable (
    estudianteId INT NOT NULL,
    responsableId INT NOT NULL,

    PRIMARY KEY (estudianteId, responsableId),
    FOREIGN KEY (estudianteId) REFERENCES estudiante(id)
        ON DELETE CASCADE,
    FOREIGN KEY (responsableId) REFERENCES responsable(id)
        ON DELETE CASCADE
);


CREATE TABLE matricula (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estudianteId INT NOT NULL,
    fecha DATE NOT NULL,
	gradoEscolarId INT NOT NULL,
    funcionarioId INT NOT NULL,

    FOREIGN KEY (estudianteId) REFERENCES estudiante(id),
    FOREIGN KEY (gradoEscolarId) REFERENCES gradoEscolar(id),
    FOREIGN KEY (funcionarioId) REFERENCES funcionario(id)
);

