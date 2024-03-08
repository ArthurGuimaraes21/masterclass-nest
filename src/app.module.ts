import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { TeamMembersRepository } from './repositories/team-members-repository';
import { PrismaTeamMembersRepository } from './repositories/prisma/prisma-team-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, {provide: TeamMembersRepository, useClass: PrismaTeamMembersRepository}],
})
export class AppModule {}
