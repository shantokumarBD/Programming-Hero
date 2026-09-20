import { booksType } from "@/app/Type/type";

export const getBooks = async (): Promise<booksType[]> => {
    try {
        const res = await fetch("http://localhost:3000/data.json")
        if (!res.ok) {
            throw new Error("Fetching Failed")
        }
        return res.json()
    } catch (error) {
        console.log(error);
        return []
    }
}
