import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  Index,
} from 'typeorm';
import { UserGroup } from './../../user-group/entities/user-group.entity';

@Entity()
@Index('idx_user_username', ['username'], { unique: true }) // Index cho cột username (unique)
@Index('idx_user_email', ['email'], { unique: true }) // Index cho cột email (unique)
@Index('idx_user_group_id', ['userGroup'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ type: 'int', default: 1 })
  status: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ nullable: false })
  user_group_id: number;

  // Mối quan hệ ManyToOne: Mỗi người dùng chỉ có thể thuộc một loại tài khoản
  @ManyToOne(() => UserGroup, (userGroup) => userGroup.users)
  @JoinColumn({ name: 'user_group_id' }) // Cột ngoại khóa
  userGroup: UserGroup;
}