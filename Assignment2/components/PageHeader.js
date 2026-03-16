import {Card} from 'react-bootstrap';

export default function PageHeader(props){
    return (
        <>
            <Card className="bg-light">
                <Card.Body>
                    <h4 className="mb-0">{props.text}</h4>
                    {props.subtext && (
                        <p className="text-muted mb-0 mt-1">{props.subtext}</p>
                    )}
                </Card.Body>
            </Card>
            <br />
        </>
    );
}