create table inventory
(
   brand varchar(255) NOT NULL,
   size integer NOT NULL,
   quantity integer,
   price decimal(10,2) NOT NULL,
   in_stock boolean NOT NULL
);