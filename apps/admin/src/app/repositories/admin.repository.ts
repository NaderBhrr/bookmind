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

            const result = await bookRepository.save(newBook);

        } catch (error) {
            console.log(error)
        }

    }

    return {
        findAllPosts,
        createBook
    }
}