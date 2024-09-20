-- Crear las bases de datos
CREATE DATABASE IF NOT EXISTS costcontrol_development;
CREATE DATABASE IF NOT EXISTS costcontrol_test;
CREATE DATABASE IF NOT EXISTS costcontrol_production;

-- Seleccionar la base de datos costcontrol_development y crear tablas
USE costcontrol_development;

-- Eliminar tablas existentes si existen
DROP TABLE IF EXISTS income_tags,
expense_tags,
incomes,
expenses,
tags,
user_categories,
predefined_categories,
vehicles,
users CASCADE;

-- Crear tablas

CREATE TABLE users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL
);

CREATE TABLE vehicles (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users (id),
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INT NOT NULL
);

CREATE TABLE predefined_categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE user_categories (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users (id),
  name TEXT NOT NULL,
  category_id TEXT REFERENCES predefined_categories (id)
);

CREATE TABLE expenses (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users (id),
  vehicle_id TEXT REFERENCES vehicles (id),
  category_id TEXT REFERENCES predefined_categories (id) ON DELETE SET NULL,
  user_category_id TEXT REFERENCES user_categories (id) ON DELETE SET NULL,
  amount NUMERIC(10, 2) CHECK (amount > 0) NOT NULL,
  date DATE NOT NULL,
  description TEXT
);

CREATE TABLE incomes (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users (id),
  category_id TEXT REFERENCES predefined_categories (id) ON DELETE SET NULL,
  user_category_id TEXT REFERENCES user_categories (id) ON DELETE SET NULL,
  amount NUMERIC(10, 2) CHECK (amount > 0) NOT NULL,
  date DATE NOT NULL,
  description TEXT
);

CREATE TABLE tags (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users (id),
  name TEXT NOT NULL,
  predefined_category_id TEXT REFERENCES predefined_categories (id),
  user_category_id TEXT REFERENCES user_categories (id)
);

CREATE TABLE expense_tags (
  expense_id TEXT REFERENCES expenses (id),
  tag_id TEXT REFERENCES tags (id),
  PRIMARY KEY (expense_id, tag_id)
);

CREATE TABLE income_tags (
  income_id TEXT REFERENCES incomes (id),
  tag_id TEXT REFERENCES tags (id),
  PRIMARY KEY (income_id, tag_id)
);

-- Repetir para costcontrol_test
USE costcontrol_test;

-- Eliminar tablas existentes si existen
DROP TABLE IF EXISTS income_tags,
expense_tags,
incomes,
expenses,
tags,
user_categories,
predefined_categories,
vehicles,
users CASCADE;

-- Crear tablas

CREATE TABLE users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL
);

CREATE TABLE vehicles (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users (id),
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INT NOT NULL
);

CREATE TABLE predefined_categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE user_categories (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users (id),
  name TEXT NOT NULL,
  category_id TEXT REFERENCES predefined_categories (id)
);

CREATE TABLE expenses (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users (id),
  vehicle_id TEXT REFERENCES vehicles (id),
  category_id TEXT REFERENCES predefined_categories (id) ON DELETE SET NULL,
  user_category_id TEXT REFERENCES user_categories (id) ON DELETE SET NULL,
  amount NUMERIC(10, 2) CHECK (amount > 0) NOT NULL,
  date DATE NOT NULL,
  description TEXT
);

CREATE TABLE incomes (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users (id),
  category_id TEXT REFERENCES predefined_categories (id) ON DELETE SET NULL,
  user_category_id TEXT REFERENCES user_categories (id) ON DELETE SET NULL,
  amount NUMERIC(10, 2) CHECK (amount > 0) NOT NULL,
  date DATE NOT NULL,
  description TEXT
);

CREATE TABLE tags (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users (id),
  name TEXT NOT NULL,
  predefined_category_id TEXT REFERENCES predefined_categories (id),
  user_category_id TEXT REFERENCES user_categories (id)
);

CREATE TABLE expense_tags (
  expense_id TEXT REFERENCES expenses (id),
  tag_id TEXT REFERENCES tags (id),
  PRIMARY KEY (expense_id, tag_id)
);

CREATE TABLE income_tags (
  income_id TEXT REFERENCES incomes (id),
  tag_id TEXT REFERENCES tags (id),
  PRIMARY KEY (income_id, tag_id)
);

-- Repetir para costcontrol_production
USE costcontrol_production;

-- Eliminar tablas existentes si existen
DROP TABLE IF EXISTS income_tags,
expense_tags,
incomes,
expenses,
tags,
user_categories,
predefined_categories,
vehicles,
users CASCADE;

-- Crear tablas

CREATE TABLE users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL
);

CREATE TABLE vehicles (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users (id),
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INT NOT NULL
);

CREATE TABLE predefined_categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE user_categories (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users (id),
  name TEXT NOT NULL,
  category_id TEXT REFERENCES predefined_categories (id)
);

CREATE TABLE expenses (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users (id),
  vehicle_id TEXT REFERENCES vehicles (id),
  category_id TEXT REFERENCES predefined_categories (id) ON DELETE SET NULL,
  user_category_id TEXT REFERENCES user_categories (id) ON DELETE SET NULL,
  amount NUMERIC(10, 2) CHECK (amount > 0) NOT NULL,
  date DATE NOT NULL,
  description TEXT
);

CREATE TABLE incomes (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users (id),
  category_id TEXT REFERENCES predefined_categories (id) ON DELETE SET NULL,
  user_category_id TEXT REFERENCES user_categories (id) ON DELETE SET NULL,
  amount NUMERIC(10, 2) CHECK (amount > 0) NOT NULL,
  date DATE NOT NULL,
  description TEXT
);

CREATE TABLE tags (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users (id),
  name TEXT NOT NULL,
  predefined_category_id TEXT REFERENCES predefined_categories (id),
  user_category_id TEXT REFERENCES user_categories (id)
);

CREATE TABLE expense_tags (
  expense_id TEXT REFERENCES expenses (id),
  tag_id TEXT REFERENCES tags (id),
  PRIMARY KEY (expense_id, tag_id)
);

CREATE TABLE income_tags (
  income_id TEXT REFERENCES incomes (id),
  tag_id TEXT REFERENCES tags (id),
  PRIMARY KEY (income_id, tag_id)
);

-- Insertar datos predefinidos en categories
INSERT INTO predefined_categories (id, name)
VALUES
  ('550e8400-e29b-41d4-a716-446655440000', 'Personal'),
  ('550e8400-e29b-41d4-a716-446655440001', 'Vehiculo')

-- Insertar datos predefinidos en tags
INSERT INTO tags (id, user_id, name, predefined_category_id, user_category_id) VALUES 
('550e8400-e29b-41d4-a716-446655440002', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440000', null, 'Vivienda'),
('550e8400-e29b-41d4-a716-446655440003', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440000', null, 'Alimentación'),
('550e8400-e29b-41d4-a716-446655440004', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440000', null, 'Salud'),
('550e8400-e29b-41d4-a716-446655440005', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440000', null, 'Educación'),
('550e8400-e29b-41d4-a716-446655440006', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440000', null, 'Transporte'),
('550e8400-e29b-41d4-a716-446655440007', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440000', null, 'Entretenimiento'),
('550e8400-e29b-41d4-a716-446655440008', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440000', null, 'Ropa y Calzado'),
('550e8400-e29b-41d4-a716-446655440009', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440000', null, 'Educación y Desarrollo'),
('550e8400-e29b-41d4-a716-446655440010', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440000', null, 'Deudas y Préstamos'),
('550e8400-e29b-41d4-a716-446655440011', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440000', null, 'Ahorro e Inversiones'),
('550e8400-e29b-41d4-a716-446655440012', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440000', null, 'Suscripciones'),
('550e8400-e29b-41d4-a716-446655440013', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440000', null, 'Otros Gastos'),
('550e8400-e29b-41d4-a716-446655440014', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440001', null, 'Combustible'),
('550e8400-e29b-41d4-a716-446655440015', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440001', null, 'Mantenimiento'),
('550e8400-e29b-41d4-a716-446655440016', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440001', null, 'Seguro'),
('550e8400-e29b-41d4-a716-446655440017', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440001', null, 'Estacionamiento'),
('550e8400-e29b-41d4-a716-446655440018', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440001', null, 'Peajes'),
('550e8400-e29b-41d4-a716-446655440019', '00000000-0000-0000-0000-000000000000', '550e8400-e29b-41d4-a716-446655440001', null, 'Accesorios y Mejoras');