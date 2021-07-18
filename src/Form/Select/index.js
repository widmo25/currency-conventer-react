import { currencies } from "../../currencies"
import "../style.css"

const Select = ({ currency, setCurrency }) => {
    return (
        <ul className="form__listSelect">
            <label className="form__label">
                Wybierz Walute*:
                <select
                    className="form__input"
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                >
                    {currencies.map((currency => (
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.name}
                        </option>
                    )))}
                </select>
            </label>
        </ul >
    )
}

export { Select }