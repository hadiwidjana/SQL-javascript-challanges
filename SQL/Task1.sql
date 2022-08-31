#Task no. 1

create database tugassql;

use tugassql;

create table product (
	id int,
    product_name varchar(255) not null,
    price int not null,
    created_at datetime not null,
    updated_at datetime not null
  );
  
create table transaction_product (
	transaction_id int not null,
    product_id int not null,
    quantity int not null
);

create table transaction (
	id int not null,
    user_id int,
    total_price int not null,
    created_at datetime,
    updated_at datetime
);

create table user (
	id int not null,
    username varchar(255) not null,
    password varchar(255) not null,
    created_at datetime,
    updated_at datetime
);
