import Module from 'module';
import { TypeOrmCoreModule } from '@nestjs/typeorm/dist/typeorm-core.module';

TypeOrmCoreModule.forRoot({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER_ID,
  password: process.env.DB_USER_PW,
  database: 'test',
  synchronize: true,
});
