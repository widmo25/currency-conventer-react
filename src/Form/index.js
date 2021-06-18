import { useState } from "react";
import Button from "../Button"
import { currencies } from "../currencies";
import { Radio } from "./Radio";
import "./style.css"


const Form = () => {

    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    const [amount, setAmount] = useState("");

    const onChangeAmount = ({ target }) => {
        setAmount(target.value);
    }

    const [currency, setCurrency] = useState(false);

    const onChangeCurrency = ({ target }) => {
        setCurrency(target.checked)
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
            <Radio currencies={currencies} onChangeCurrency={onChangeCurrency} checked={currency} />
            <Button />
        </form>
    )
}

export default Form;