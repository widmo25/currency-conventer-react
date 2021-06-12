import Form from "./Form";
import Container from "./Container"
import Footer from "./Footer"

function App() {
    return (
        <Container>
            <h1 className="container__header">Walutomat - Twój kantor w sieci </h1>
            <Form />
            <p className="result js-result"></p>
            <Footer/>
        </Container>
    );
}

export default App;
