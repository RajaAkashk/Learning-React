import './App.css'

const MathOperations = () => {
  const a = 20 ;
  const b = 8 ;

  const getSum = (x,y) => {
    return x + y
  }

  const getDiffrence = (x,y) => {
    return x - y
  }

  return(
    <div>
    <p>{a} + {b} equals {getSum(a,b)}</p>
    <p>{a} - {b} equals {getDiffrence(a,b)}</p>
    </div>
  )
}

const CallGreetingFunction = () => {
  const getGreeting = () =>{
    return "Hello World!"
  }
  return <h1>{getGreeting()}</h1>
}

const GetFormatedDate = () => {
  const getCurrentData = () => {
    return new Date().toLocaleDateString();
  }
  return <p>Current Date: {getCurrentData()}</p>
}
 


export default function App() {
  return (
    <main>
    <CallGreetingFunction/>
    <MathOperations/>
    <GetFormatedDate/>  
    </main>
  )
}
