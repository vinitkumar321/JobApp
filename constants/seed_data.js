export default {
  CREATE_USER_TABLE:
    'create table if not exists user( \
        id int primary key auto_increment, \
        first_name varchar(255)not null, \
        last_name varchar(255)not null, \
    );'
}
