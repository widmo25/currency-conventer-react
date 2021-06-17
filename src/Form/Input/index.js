import { currencies } from "../../currencies";

const Input = () => {
    <ul>
        <li>
            <label>
                {currencies.map(currency => (
                    <input>{currency}</input>
                ))}

            </label>
        </li>
    </ul>
}

export { Input };
