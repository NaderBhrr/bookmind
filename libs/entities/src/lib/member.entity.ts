import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    lastExchangedBook: string;

    @Column()
    currentOwnedBook: string;
}