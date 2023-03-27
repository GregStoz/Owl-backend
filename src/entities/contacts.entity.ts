import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
  } from "typeorm";
  import { User } from "./users.entity";
  
  @Entity("contacts")
  export class Contact {
    @PrimaryGeneratedColumn(`uuid`)
    id: string;
  
    @Column({ length: 50 })
    name: string;
  
    @Column({ length: 50 })
    email: string;
  
    @Column()
    phone: string;

    @ManyToOne(() => User, user => user.contacts)
    @JoinColumn({ name: "userId" })
    user: User;
    
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    
    }
  