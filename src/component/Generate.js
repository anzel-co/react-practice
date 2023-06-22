const isPrime = (n) => {
    let factor = 0
    for (let i = 1; i <= n; i++) { if (n % i === 0) factor++ }
    return factor === 2 ? true : false
  } 
  
const Num = ({numbers}) => {
    let numColor
    let primeColor = { backgroundColor: '#ff4d4d' }
    let oddColor = { backgroundColor: '#ffff40' }
    let evenColor = { backgroundColor: '#4da64d' }
    let Nums = numbers.map((number) => {
      if (isPrime(number) === true) numColor = primeColor
      else if (number % 2 !== 0) numColor = oddColor
      else if (number % 2 === 0) numColor = evenColor
      return (<h3 className='num'key={number} style={numColor}>{number}</h3>)
    })
    return Nums
}
  
const Generate = ({renderNum, numbers}) => (
    <div className='numberInputs'>
    <input id='numberInput' type='number' placeholder='Enter a number to generate number'></input>
    <button className='gen' onClick={renderNum}>GENERATE</button>
    <div className='NumContainer'>
      <Num numbers={numbers} />
    </div>
    </div>
)

export default Generate