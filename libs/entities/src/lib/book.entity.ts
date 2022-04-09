import {Entity, Column, ManyToOne, PrimaryColumn, Relation, OneToOne, } from "typeorm";
import {Member} from "@bookmind/entities"

@Entity() 
export class Book {
    @PrimaryColumn ()
    id: string

    @Column()
    bookTitle: string

    @Column()
    currentOwner: string

    // @ManyToOne (() => Member, (currentOwner) => currentOwner.exchangedBooks )
    // currentOwner: Relation<Member>

    // @ManyToOne(() => Member)
    // initialOwner: Relation<Member>

    @Column({type: "date"})
    offeredAt: string

    @Column({type: "date"})
    exchangedAt: string  
}