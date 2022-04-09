import { Book, Member } from "@bookmind/entities";


export const adminRepository = function (datasourceInstance) {

    async function findAllPosts(): Promise<Member> {
        const memberRepository = datasourceInstance.getRepository(Member);

        const data = await memberRepository.find();

        return data;
    }

    async function createBook(book: any) {

        try {
            const bookRepository = datasourceInstance.getRepository(Book);

            const newBook = bookRepository.create(book);

            console.log('new book!!', newBook)

            const r = await bookRepository.save(newBook)

            console.log("saved >>", r)
        } catch (error) {
            console.log(error)
        }

    }

    return {
        findAllPosts,
        createBook
    }
}