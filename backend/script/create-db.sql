-- Create the database
CREATE DATABASE CryptoInvestmentSystem;

-- Use the database
USE CryptoInvestmentSystem;

-- Create the Usuario table
CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_criacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create the Ativo table
CREATE TABLE Ativo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    codigo VARCHAR(10) NOT NULL UNIQUE,
    preco_atual DECIMAL(15, 2) NOT NULL
);

-- Create the Conta_de_Investimento table
CREATE TABLE Conta_de_Investimento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    numero_conta VARCHAR(50) NOT NULL UNIQUE,
    saldo DECIMAL(15, 2) NOT NULL,
    tipo_moeda VARCHAR(10) NOT NULL,
    data_criacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

-- Create the Transacao table
CREATE TABLE Transacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    conta_id INT NOT NULL,
    tipo VARCHAR(10) NOT NULL CHECK (tipo IN ('compra', 'venda')),
    montante DECIMAL(15, 2) NOT NULL,
    data DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ativo_id INT NOT NULL,
    FOREIGN KEY (conta_id) REFERENCES Conta_de_Investimento(id),
    FOREIGN KEY (ativo_id) REFERENCES Ativo(id)
);

