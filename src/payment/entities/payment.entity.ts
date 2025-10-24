
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('payment')
export class Payment {
   
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column({nullable: true})
  currency : string;

  @Column({nullable: true})
  amount: number;


  @Column({default: true, nullable: true})
  isActive: boolean;

}
