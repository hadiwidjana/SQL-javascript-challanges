#Task no 5 A
select u.username, sum(t.total_price) totalPrice from transaction t
join user u on t.user_id = u.id
group by u.username;

#Task no 5 B
select p.product_name, sum(tp.quantity) totalQuantity from product p
join transaction_product tp on tp.product_id = p.id
group by p.product_name
order by totalQuantity desc;