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
  function escapeRegExp(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  const [inputText, setInputText] = useState<string>('');
  const changeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const chainWord = (word: string) => {
    if(inputText === '') {
      setInputText(word)
    } else {
      setInputText(current => current + ', ' + word)
    }
  };
  const delWord = (word: string) => {
    setInputText(current => current.replace(word, ""));
    setInputText(current => current.replace(" ,", ""));
    setInputText(current => current.replace(new RegExp("^" + escapeRegExp(", "), "g"), ""));
    setInputText(current => current.replace(new RegExp(escapeRegExp(", ") + "$", "g"), ""));
  }
  const isInclude = (word: string) => {
    return inputText.includes(word);
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
             onClick={!isInclude(elem) ? () => {chainWord(elem)} :() => {delWord(elem)}}
            //  disabled={isInclude(elem)}
             key={elem}
             className="w-20 h-10 bg-blue-800 rounded-full"
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
