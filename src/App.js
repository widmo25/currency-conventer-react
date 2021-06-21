import {Form} from "./Form";
import Container from "./Container"
import Footer from "./Footer"
import Result from "./Result"
import { useState } from "react";
import { currencies } from "./currencies";


function App() {
    const [result, setResult] = useState("")

    const calculateResult = (amount, currency) => {
        const rate = currencies.find(({short}) => short === currency).rate;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    }

    return (
        <Container>
            <h1 className="container__header">Walutomat - Twój kantor w sieci </h1>
            <Form calculateResult={calculateResult} />
            <Result result={result}/>
            <Footer />
        </Container>
    );
}

export default App;
