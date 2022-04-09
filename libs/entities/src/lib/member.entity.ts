import {Entity, Column, ManyToOne, OneToMany, PrimaryColumn, Relation} from "typeorm";
import {Book} from "@bookmind/entities"

@Entity()
export class Member {
    @PrimaryColumn()
    id: number

    @Column()
    lastExchangedBook: string;

    @Column()
    currentOwnedBook: string;

    // @OneToMany(() => Book, (book) => book.currentOwner)
    // exchangedBooks: Book[]
}