import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'test', name: 'cronjob' })
export class CronJob {
  @PrimaryGeneratedColumn
  id: number;
  @Column('varchar', { name: 'name', length: 50 })
  name: string;
  @Column
  description: string;
  @Column('varchar', { name: 'extension', length: 10 })
  extension: string;
  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
