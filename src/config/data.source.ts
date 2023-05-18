import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

ConfigModule.forRoot({
  envFilePath: '.env',
});

const env = new ConfigService();

export const DataSourceConfig = {
  type: env.get('DB_TYPE'),
  host: env.get('DB_HOST'),
  username: env.get('DB_USER'),
  password: env.get('DB_PASSWORD'),
  database: env.get('DB_NAME'),
  entities: [__dirname + '/../**/**/*.entity{.ts, .js}'],
  migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  logging: false,
};

export const AppDS = new DataSource(DataSourceConfig);
