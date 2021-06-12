import Form from "./Form";


function App() {
  return (
    <div className="container">
        <h1 className="container__header">Walutomat - Twój kantor w sieci </h1>
        <Form />
        <p className="result js-result"></p>
        <footer>
            2021&copy; Wszelkie prawa zastrzeżone!!!
        </footer>
    </div>
  );
}

export default App;
