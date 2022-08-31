#Task no 4
select id, product_name, price
from product
where price > 50000
order by price asc
limit 3,3;
