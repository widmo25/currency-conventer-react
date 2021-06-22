import { useState } from "react";
import Button from "../Button"
import { currencies } from "../currencies";
import { Select } from "./Select";
import "./style.css"

export const Form = ({ calculateResult }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency)
    }

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short)

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
            <h2 className="form__header">Wybierz Walutę:</h2>
            <Select setCurrency={setCurrency} currency={currency} />
            <Button />
        </form>
    )
}
