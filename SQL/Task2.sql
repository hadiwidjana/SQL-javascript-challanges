#Task no. 2

alter table product
add primary key(id),
modify column id int auto_increment;

alter table transaction
add primary key(id),
modify column id int auto_increment;

alter table user
add primary key(id),
modify column id int auto_increment;

alter table transaction
add constraint FK_userid
foreign key (user_id) references user(id);

alter table transaction_product
add constraint FK_transactionid
foreign key (transaction_id) references transaction(id),
add constraint FK_productid
foreign key (product_id) references product(id);