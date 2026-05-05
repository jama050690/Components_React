import "./Book.css" 
export default function Book({ name, author, price }: { name: string, author: string, price: number }) {
    const OnClick = () => {console.log("Book ordered: ", name)}
    return (
        <li className="book">
            {/* <a href="/books/1"> */}
                <h3>{name}</h3>
                <p>
                    <span>Muallif: {author}</span>
                    <span>Narx: {price} so'm</span>
                </p>
                <button onClick={OnClick}>Order</button>
            {/* </a> */}
        </li>
    )
}