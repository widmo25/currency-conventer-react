
function App() {
  return (
    <div className="container">
        <h1 className="container__header">Walutomat - Twój kantor w sieci </h1>
        <form className="form js-form">
            <label className="form__label form__label--higlighted">
                Wpisz kwotę*:
                <input className="form__input js-input" type="number" min="0.1" step="any" required
                    placeholder="wpisz kwotę w PLN"/>
            </label>
            <h2>Wybierz Walute:</h2>
            <ul className="form__listRadio">
                <li>
                    <label className="form__label">
                        <input className="form__input js-currency" type="radio" name="currency" value="eur"/>
                        Euro
                    </label>
                </li>
                <li>
                    <label className="form__label">
                        <input className="form__input js-currency" type="radio" name="currency" value="usd"/>
                        Dolar Amerykański
                    </label>
                </li>
                <li> <label className="form__label">
                        <input className="form__input js-currency" type="radio" name="currency" value="pound"/>
                        Funt Brytyjski
                    </label>
                </li>
            </ul>
            <button className="button js-button">
                Oblicz kurs
            </button>
        </form>
        <p className="result js-result"></p>
        <footer>
            2021&copy; Wszelkie prawa zastrzeżone!!!
        </footer>
    </div>
  );
}

export default App;
