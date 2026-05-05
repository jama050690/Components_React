import Book from './book'; // Fayl nomi kichik harfda bo'lsa './book'

// 1. Props ichida 'books' massivini ham e'lon qiling
interface BooksProps {
    name: string;
    books: { id: number; name: string; author: string; price: number }[];
}

export function Books({ name, books }: BooksProps) {
    // 2. Agar 'books' hali kelmagan bo'lsa, xato bermasligi uchun tekshiruv
    if (!books) return <p>Yuklanmoqda...</p>;

    return (
        <>
            <h1>{name}</h1>
            <ul>
                {books.map((book, i) => (
                    <Book 
                        key={book.id || i} // id bo'lsa id, bo'lmasa i
                        name={book.name}
                        author={book.author}
                        price={book.price} 
                    />
                ))}
            </ul>
        </>
    );
}