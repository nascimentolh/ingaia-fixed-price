module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['./build/modules/**/infra/typeorm/entities/*.js'],
  migrations: ['./build/shared/infra/typeorm/migrations/*.js'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};
