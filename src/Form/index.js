import { useState } from "react";
import Button from "../Button"
import "./style.css"

const Form = () => {

    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    const [amount, setAmount] = useState("");

    const onChangeAmount = ({ target }) => {
        setAmount(target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <label className="form__label">
                Wpisz kwotę*:
                <input
                    className="form__input"
                    value={amount}
                    type="number"
                    min="0.1"
                    step="any"
                    required
                    placeholder="wpisz kwotę w PLN"
                    onChange={onChangeAmount}
                />
            </label>
            <h2>Wybierz Walute:</h2>
            <ul className="form__listRadio">
                <li>
                    <label className="form__label">
                        <input
                            className="form__input"
                            type="radio"
                            name="currency"
                            value="eur" />
                        Euro
                    </label>
                </li>
                <li>
                    <label className="form__label">
                        <input
                            className="form__input"
                            type="radio"
                            name="currency"
                            value="usd" />
                        Dolar Amerykański
                    </label>
                </li>
                <li>
                    <label className="form__label">
                        <input
                            className="form__input"
                            type="radio"
                            name="currency"
                            value="pound" />
                        Funt Brytyjski
                    </label>
                </li>
            </ul>
            <Button />
        </form>
    )
}

export default Form;