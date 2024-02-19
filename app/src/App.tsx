import { useState } from "react"
import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { Input } from "./components/ui/input"
const buttonList = [
  "ダラダラ",
  "ワイワイ",
  "まったり",
  "集中",
  "初心者",
]


function App() {

  const [inputText, setInputText] = useState("");
  const changeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  return (
    <div className="flex justify-center m-10">
      <Card className="w-[550px]">
        <div className="flex m-4">
          <Input
           value={inputText}
           onChange={changeInput}
           className="w-3/4"
           type="search"
           placeholder="ボタンを押しても入力できます！"
          />
          <Button className="ml-2 grow" onClick={() => {setInputText("")}}>検索</Button>
        </div>
        <div className="flex justify-around m-4">
          {buttonList.map((elem) => (
            <Button
             onClick={() => {setInputText(elem)}}
             key={elem}
             className="bg-blue-800 rounded-full w-20 h-10"
            >
              {elem}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default App
