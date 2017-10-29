drop table if exists users;
create table users (
id serial primary key,
username varchar unique,
password_digest text not null
);

drop table if exists zens;
create table zens (
id serial primary key,
content text not null,
time_stamp text not null,
user_id integer references users(id)
);
