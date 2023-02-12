

require( "dotenv" ).config();
const { PGUSER, PGPASSWORD, PGDATABASE,PGHOST,PGPORT,DATABASE_URL } = process.env;
module.exports = {
   development: {
      username: PGUSER,
      password: PGPASSWORD,
      database: PGDATABASE,
      host: PGHOST,
      port:PGPORT,
      dialect: "postgres"
   },
   test: {
      username: "root",
      password: null,
      database: "my_express_app_test",
      host: "127.0.0.1",
      dialect: "postgres"
   },
   production: {
          use_env_variable: DATABASE_URL,
          dialect: "postgres",
          dialectOptions: {
             ssl: {
               require: true,
               rejectUnauthorized: false
             }
           }
         }
}