create database db3;
use db3;

create table employees(
emp_id int primary key,
emp_name varchar(20),
manager_id int default 1
);

select * from employees;

insert into employees values 
(1,'Anmol',null),
(2,'Rahul',1),
(3,'Priya',1),
(4,'Sneha',2);

select 
e.emp_name as employee,
m.emp_name as manager
from employees e
left join employees m
on e.manager_id = m.emp_id;


