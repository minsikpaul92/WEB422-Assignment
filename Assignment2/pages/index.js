/*********************************************************************************
 * WEB422 – Assignment 2
 *
 * I declare that this assignment is my own work in accordance with Seneca's
 * Academic Integrity Policy:
 *
 * https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
 *
 * Name: Minsik Kim             Student ID: 185751237          Date: Mar 15, 2026
 * Name: Yuma Kawai             Student ID: 175578236          Date: Mar 15, 2026.
 *
 ********************************************************************************/

import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const submitForm = (data) => {
    router.push({
      pathname: "/books",
      query: Object.fromEntries(
        Object.entries(data).filter(([key, value]) => value !== "")
      )
    });
  };

  return (
    <>
      <PageHeader
        text="Book Search"
        subtext="Search books using OpenLibrary"
      />

      <Form onSubmit={handleSubmit(submitForm)}>

        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Author *</Form.Label>
              <Form.Control
                {...register("author", { required: "Author is required" })}
                className={errors.author ? "is-invalid" : ""}
              />
              {errors.author && (
                <div className="invalid-feedback">
                  {errors.author.message}
                </div>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control {...register("title")} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control {...register("subject")} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Language</Form.Label>
              <Form.Control {...register("language")} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>First Publish Year</Form.Label>
              <Form.Control {...register("first_publish_year")} />
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit" variant="primary">
          Search
        </Button>

      </Form>
    </>
  );
}