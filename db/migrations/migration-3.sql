delete from zens;

alter table if exists zens add column expiration_date text not null;
alter table if exists zens drop column user_id;

drop table if exists users;
