

require( "dotenv" ).config();
const { PGUSER, PGPASSWORD, PGDATABASE,PGHOST,PGPORT,DATABASE_URL } = process.env;
module.exports = {
   // development: {
   //    username: PGUSER,
   //    password: PGPASSWORD,
   //    database: PGDATABASE,
   //    host: PGHOST,
   //    port:PGPORT,
   //    dialect: "postgres"
   // },
   development: {
      username: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "postgres",
      database: process.env.DB_NAME || "fake2",
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      dialect: "postgres",
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