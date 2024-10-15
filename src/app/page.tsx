"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [errorInputValue, setErrorInputValue] = useState("");
  const [checkboxhValue, setCheckboxhValue] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [selectedOption, setSelectedOption] = useState('전체');
 
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Select
            value={selectedOption}
            onValueChange={(value) => {
                setSelectedOption(value);
            }}
          >
            <SelectTrigger className="h-10 border-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="전체">전체</SelectItem>
              <SelectItem value="명동엘로세움">명동엘로세움</SelectItem>
              <SelectItem value="이편한세상 한숲시티">이편한세상 한숲시티</SelectItem>
              <SelectItem value="창원 롯데캐슬 하버팰리스">창원 롯데캐슬 하버팰리스</SelectItem>
              <SelectItem value="대구 롯데몰">대구 롯데몰</SelectItem> 
              <SelectItem value="대구 롯데몰">대구 롯데몰</SelectItem> 
              <SelectItem value="대구 롯데몰">대구 롯데몰</SelectItem> 
            </SelectContent>
          </Select>
          <Badge className="bg-palette-red">경고</Badge>
          <Checkbox checked={checkboxhValue} onClick={() => setCheckboxhValue(prev => !prev)}/>
          <Switch checked={switchValue} onClick={() => setSwitchValue(prev => !prev)}/>
          <Input className="focus-visible:border-primary-300 focus-visible:shadow-primary-input" value={inputValue} onChange={(event)=> setInputValue(event.target.value)} placeholder="default input"/>
          <Input className="focus-visible:border-primary-300 focus-visible:shadow-primary-input" placeholder="default input" disabled/>
          <Input className="border-palette-red focus-visible:shadow-error-input" value={errorInputValue} onChange={(event)=> setErrorInputValue(event.target.value)} placeholder="error input"/>
          <Button className="bg-primary-500 hover:bg-primary-800 text-white rounded-lg px-5 h-11" onClick={() => console.log(checkboxhValue)}>버튼</Button>
        </div>
      </main> 
    </div>
  );
}
