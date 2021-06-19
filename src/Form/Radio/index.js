import { currencies } from "../../currencies"

const Radio = () => {



    return (
        <ul className="form__listRadio">
            {currencies.map(currency => (
                < li key={currency.name} >
                    <label className="form__label">
                        <input className="form__input" value={currency.rate} type="radio" name="currency" />
                        {currency.name}
                    </label>
                </li>
            ))}

        </ul >
    )

}

export { Radio }