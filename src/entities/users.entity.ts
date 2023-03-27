import { hash } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  DeleteDateColumn,
  OneToMany
} from "typeorm";
import { Contact } from "./contacts.entity"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 50 })
  password: string;

  @Column()
  phone: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Contact, contact => contact.user)
  contacts: Contact[];

  @BeforeUpdate()
  @BeforeInsert()
  async hashPassword() {
    if(this.password){
      this.password = await hash(this.password, 10);
    }
  }

  @DeleteDateColumn()
  deletedAt: Date;
}