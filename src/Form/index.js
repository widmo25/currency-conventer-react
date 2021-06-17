import { useState } from "react";
import Button from "../Button"
import { currencies } from "../currencies";
import { Input } from "./Input";
import "./style.css"


const Form = () => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(`${amount} , ${currency}`)
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
                        <Input currencies={currencies} />
                        Euro
                    </label>
                </li>
                <li>
                    <label className="form__label">
                        <Input currencies={currencies} />
                        Dolar Amerykański
                    </label>
                </li>
                <li>
                    <label className="form__label">
                        <Input currencies={currencies} />
                        Funt Brytyjski
                    </label>
                </li>
            </ul>
            <Button />
        </form>
    )
}

export default Form;