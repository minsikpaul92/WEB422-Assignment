import { useAtom } from 'jotai';
import { Row, Col } from 'react-bootstrap';
import PageHeader from '@/components/PageHeader';
import BookCard from '@/components/BookCard';
import { favouritesAtom } from '@/store';

export default function Favourites() {
  const [favouritesList] = useAtom(favouritesAtom);

  return (
    <>
      {favouritesList.length > 0 ? (
        <>
          <PageHeader
            text="Favourites"
            subtext="Your Favourite Books"
          />
          <Row className="gy-4">
            {favouritesList.map((workId) => (
              <Col key={workId} lg={3} md={6}>
                <BookCard workId={workId} />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <PageHeader
          text="Nothing Here"
          subtext="Add a book to your favourites to see it here"
        />
      )}
    </>
  );
}