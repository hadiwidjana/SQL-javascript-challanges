#Task no 3 A 
insert into user (username, password, created_at, updated_at)
values 
('andi', 'andi123', '2022-08-27', '2022-08-28'),
('budi', 'budi_ganteng999', '2022-08-27', '2022-08-28');

#Task no 3 B
insert into product (product_name, price, created_at, updated_at)
values 
('baju', '67000', '2022-08-17', '2022-08-17'),
('celana', '86000', '2022-08-18', '2022-08-18'),
('buku', '24000', '2022-08-19', '2022-08-19'),
('sepatu', '128000', '2022-08-20', '2022-08-20'),
('sepeda', '1500000', '2022-08-21', '2022-08-21'),
('bola', '17000', '2022-08-22', '2022-08-22'),
('komputer', '8956000', '2022-08-23', '2022-08-23'),
('gelas', '96400', '2022-08-24', '2022-08-24');

#Task no 3 C
insert into transaction (user_id, total_price, created_at, updated_at)
values
(1, '392000', '2022-08-15', '2022-08-15'),
(2, '8484000', '2022-08-16', '2022-08-16'),
(2, '440000', '2022-08-19', '2022-08-19'),
(1, '448800', '2022-08-24', '2022-08-24');

#Task no 3 D
insert into transaction_product (transaction_id, product_id, quantity)
values
(1, 1, 2),
(1, 2, 3),
(2, 7, 1),
(2, 4, 1),
(3, 2, 4),
(3, 3, 4),
(4, 8, 2),
(4, 4, 2);


#################################
#####check transaction table#####
#################################
select tp.transaction_id, u.username, p.product_name, tp.quantity, t.created_at, t.updated_at from transaction_product tp
join product p on tp.product_id = p.id
join transaction t on tp.transaction_id = t.id
join user u on t.user_id = u.id
order by tp.transaction_id asc;


#Task no 3 E
update transaction_product set quantity = 1
where transaction_product.transaction_id in (select id from transaction 
where user_id in (select id from user where username = 'andi')) and
transaction_product.product_id in (select id from product where product_name = 'gelas');


#Task no 3 F
delete from transaction_product 
where transaction_product.transaction_id in (select id from transaction
where total_price = ( select min(total_price) from transaction));
#check transaction table again to confirm