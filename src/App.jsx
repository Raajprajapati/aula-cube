import { useState } from 'react'
import Task from './Components/Task'
import Modal from './Components/Modal'
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Aula cube assignment starts
      
      <Routes>
      <Route path="/" element={<Modal />} />
      <Route index element={<Modal />} />
      <Route path="tasks" element={<Task/>} />
      </Routes>

      {/* <Task description={"this is the description of the task loreamjhhbdcje dfd jehf jhe rdjhrejdsvh jsd jhd jh dfcjh scjhs cjhesdnjhs dnvcjhsdfncjhms cjhs jehsmdn vihsv divjbasodvvb ewosvbw osjb wvosjvb wisdj shd njhfbcjdfxncirhsjsncfddcdndsnwnssh he hejsfh jehr vjjw sobjv eojvbe ojf"} title={"do nothing"}/>
      <Task description={"this is the description of the task loreamjhhbdcje dfd jehf jhe rdjhrejdsvh jsd jhd jh dfcjh scjhs cjhesdnjhs dnvcjhsdfncjhms cjhs jehsmdn vihsv divjbasodvvb ewosvbw osjb wvosjvb wisdj shd njhfbcjdfxncirhsjsncfddcdndsnwnssh he hejsfh jehr vjjw sobjv eojvbe ojf"} title={"do nothing"}/>
      <Task description={"this is the description of the task loreamjhhbdcje dfd jehf jhe rdjhrejdsvh jsd jhd jh dfcjh scjhs cjhesdnjhs dnvcjhsdfncjhms cjhs jehsmdn vihsv divjbasodvvb ewosvbw osjb wvosjvb wisdj shd njhfbcjdfxncirhsjsncfddcdndsnwnssh he hejsfh jehr vjjw sobjv eojvbe ojf"} title={"do nothing"}/>

      <Task description={"this is the description of the task loreamjhhbdcje dfd jehf jhe rdjhrejdsvh jsd jhd jh dfcjh scjhs cjhesdnjhs dnvcjhsdfncjhms cjhs jehsmdn vihsv divjbasodvvb ewosvbw osjb wvosjvb wisdj shd njhfbcjdfxncirhsjsncfddcdndsnwnssh he hejsfh jehr vjjw sobjv eojvbe ojf"} title={"do nothing"}/>
      <Task description={"this is the description of the task loreamjhhbdcje dfd jehf jhe rdjhrejdsvh jsd jhd jh dfcjh scjhs cjhesdnjhs dnvcjhsdfncjhms cjhs jehsmdn vihsv divjbasodvvb ewosvbw osjb wvosjvb wisdj shd njhfbcjdfxncirhsjsncfddcdndsnwnssh he hejsfh jehr vjjw sobjv eojvbe ojf"} title={"do nothing"}/>

      <Task description={"this is the description of the task loreamjhhbdcje dfd jehf jhe rdjhrejdsvh jsd jhd jh dfcjh scjhs cjhesdnjhs dnvcjhsdfncjhms cjhs jehsmdn vihsv divjbasodvvb ewosvbw osjb wvosjvb wisdj shd njhfbcjdfxncirhsjsncfddcdndsnwnssh he hejsfh jehr vjjw sobjv eojvbe ojf"} title={"do nothing"}/>
      <Task description={"this is the description of the task loreamjhhbdcje dfd jehf jhe rdjhrejdsvh jsd jhd jh dfcjh scjhs cjhesdnjhs dnvcjhsdfncjhms cjhs jehsmdn vihsv divjbasodvvb ewosvbw osjb wvosjvb wisdj shd njhfbcjdfxncirhsjsncfddcdndsnwnssh he hejsfh jehr vjjw sobjv eojvbe ojf"} title={"do nothing"}/>

      <Task description={"this is the description of the task loreamjhhbdcje dfd jehf jhe rdjhrejdsvh jsd jhd jh dfcjh scjhs cjhesdnjhs dnvcjhsdfncjhms cjhs jehsmdn vihsv divjbasodvvb ewosvbw osjb wvosjvb wisdj shd njhfbcjdfxncirhsjsncfddcdndsnwnssh he hejsfh jehr vjjw sobjv eojvbe ojf"} title={"do nothing"}/>
      <Task description={"this is the description of the task loreamjhhbdcje dfd jehf jhe rdjhrejdsvh jsd jhd jh dfcjh scjhs cjhesdnjhs dnvcjhsdfncjhms cjhs jehsmdn vihsv divjbasodvvb ewosvbw osjb wvosjvb wisdj shd njhfbcjdfxncirhsjsncfddcdndsnwnssh he hejsfh jehr vjjw sobjv eojvbe ojf"} title={"do nothing"}/> */}
    </>
  )
}

export default App
