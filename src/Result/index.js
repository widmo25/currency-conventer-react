import "./style.css"

const Result = ({result , setResult}) => (
    <p className="result" value={result} onChange={setResult}></p>
)

export default Result