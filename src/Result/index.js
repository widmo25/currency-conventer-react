import "./style.css"

const Result = ({ result }) => (
    <p className="result">
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=

                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </>
        )}
    </p>
)

export default Result