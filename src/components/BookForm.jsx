import Button from "./Button"
import Input from "./Input"

const BookForm = () => {
    return (
        <div className="add-book-row">
            <Input id="bookInput" placeholder="Название книги..."/>
            <Button id="addBtn"/>
        </div>
    )
}

export default BookForm