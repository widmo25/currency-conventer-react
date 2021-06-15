import Form from "./Form";
import Container from "./Container"
import Footer from "./Footer"
import Result from "./Result"

function App() {
    return (
        <Container>
            <h1 className="container__header">Walutomat - Twój kantor w sieci </h1>
            <Form />
            <Result />
            <Footer />
        </Container>
    );
}

export default App;
