import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

ConfigModule.forRoot({
	envFilePath: '.env',
});

const env = new ConfigService();

export const DataSourceConfig: DataSourceOptions = {
	type: env.get('DB_TYPE'),
	host: env.get('DB_HOST'),
	port: env.get('DB_PORT'),
	username: env.get('DB_USER'),
	password: '',
	database: env.get('DB_DATABASE'),
	entities: [__dirname+'/../**/**/*.entity{.ts, .js}'],
	migrations: [__dirname+'/../../migrations/*{.ts,.js}'],
	synchronize: false,
	migrationsRun: true,
	logging: false,
	namingStrategy: new SnakeNamingStrategy()
};

export const AppDS =  new DataSource(DataSourceConfig);