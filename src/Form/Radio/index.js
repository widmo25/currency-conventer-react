import { currencies } from "../../currencies"

const Radio = ({ short, name }) => {
    return (
        <ul className="form__listRadio">
            {currencies.map(currency => (
                < li key={currency.name} >
                    <label className="form__label">
                        <input className="form__input" value={short} type="radio" name={name} />
                        {currency.name}
                    </label>
                </li>
            ))}

        </ul >
    )

}

export { Radio }