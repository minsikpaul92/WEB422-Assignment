import Link from "next/link";
import {Card} from "react-bootstrap";
import BookDetails from "@/components/BookDetails";
import PageHeader from "@/components/PageHeader";

export async function getStaticProps(){
    const workId = "OL453657W";
    const res = await fetch(`https://openlibrary.org/works/${workId}.json`);
    if (!res.ok) {
        return { props: { book: null } };
    }
    
    const data = await res.json();

    return {
        props: {
            book: data,
        },
    };
}

export default function About(props){
    if (!props.book) return <div>Loading...</div>;
    
    return (
        <>
            <PageHeader text="About the Developer: Minsik Kim" />

            <Card>
                <Card.Body>
                    <p>
                        Hello! My name is Minsik Kim, and I am a student in the Computer Programming and Analysis (CPA) program at Seneca Polytechnic. I have a strong interest in Python and web development, and I am currently expanding my skills in React and Next.js
                    </p>
                    <p>
                        The book I have selected for this project is "{props.book.title}." I chose this book to practice fetching and displaying complex data from the Open Library API.
                    </p>
                    <BookDetails book={props.book} />
                </Card.Body>
            </Card>
        </>
    );
}