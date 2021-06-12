import Form from "./Form";
import Container from "./Container"

function App() {
    return (
        <Container>
            <h1 className="container__header">Walutomat - Twój kantor w sieci </h1>
            <Form />
            <p className="result js-result"></p>
            <footer>
                2021&copy; Wszelkie prawa zastrzeżone!!!
            </footer>
        </Container>
    );
}

export default App;
