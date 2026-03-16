import useSWR from 'swr';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import Error from 'next/error';

export default function BookCard({ workId }) {
  const { data, error } = useSWR(
    `https://openlibrary.org/works/${workId}.json`
  );

  if (error) return <Error statusCode={404} />;
  if (!data) return <p>Loading...</p>;

  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://covers.openlibrary.org/b/id/${data?.covers?.[0]}-M.jpg`}
        alt={data.title || 'Book cover'}
        className="img-fluid"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/400x600?text=Cover+Not+Available';
        }}
      />
      <Card.Body>
        <Card.Title>{data.title || ''}</Card.Title>
        <Card.Text>{data.first_published_date || 'N/A'}</Card.Text>
        <Link href={`/works/${workId}`} className="btn btn-outline-primary btn-sm">
          View Details
        </Link>
      </Card.Body>
    </Card>
  );
}