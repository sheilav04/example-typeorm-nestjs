import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORM } from './config/typeORM';
import { RolesModule } from './roles/roles.module';
import { PersonalInformationModule } from './personal_information/personal_information.module';
import { EjemploModule } from './ejemplo/ejemplo.module';
import { PeriodoModule } from './periodo/periodo.module';
import { UserCursoModule } from './user_curso/user_curso.module';
@Module({
  imports: [TypeOrmModule.forRoot(typeORM()), UsersModule, RolesModule, PersonalInformationModule, EjemploModule, PeriodoModule, UserCursoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
