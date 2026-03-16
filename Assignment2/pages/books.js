import useSWR from "swr";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Pagination, Table } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";

export default function Books() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const router = useRouter();

  const queryString = new URLSearchParams(router.query).toString();

  const { data, error } = useSWR(
    queryString.length > 0
      ? `https://openlibrary.org/search.json?${queryString}&page=${page}&limit=10`
      : null,
  );

  useEffect(() => {
    if (data?.docs) {
      setPageData(data.docs);
    }
  }, [data]);

  const subtext = Object.entries(router.query)
    .map(([k, v]) => `${k}: ${v}`)
    .join(" | ");

  if (error) return <p>Error loading...</p>;
  if (!data && queryString.length > 0) return <p>Loading...</p>;

  return (
    <>
      <PageHeader text="Search Results" subtext={subtext} />

      <Table striped hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>First Publish Year</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((book, index) => (
            <tr
              key={index}
              onClick={() => {
                const workId = book.key.split("/").pop();
                router.push(`/works/${workId}`);
              }}
              style={{ cursor: "pointer" }}
            >
              <td>{book.title}</td>
              <td>{book.first_publish_year || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.Prev
          onClick={() => page > 1 && setPage(page - 1)}
          disabled={page === 1}
        />
        <Pagination.Item active>{page}</Pagination.Item>
        <Pagination.Next onClick={() => setPage(page + 1)} />
      </Pagination>
    </>
  );
}
