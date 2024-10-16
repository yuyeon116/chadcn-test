"use client"
import { HealthStatusBadge, Button, Checkbox, Input, Select, Switch } from "@ui"; 
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [errorInputValue, setErrorInputValue] = useState("");
  const [checkboxhValue, setCheckboxhValue] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [selectedOption, setSelectedOption] = useState('전체');
 
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div className="flex gap-1">
            <HealthStatusBadge variant="normal">정상</HealthStatusBadge>
            <HealthStatusBadge variant="normal" size="large">정상</HealthStatusBadge>
            <HealthStatusBadge variant="warning">경고</HealthStatusBadge>
            <HealthStatusBadge variant="warning" size="large">경고</HealthStatusBadge>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <Button>primary</Button>
              <Button disabled>primary</Button> 
            </div>
            <div className="flex gap-2">
              <Button variant="secondary">secondary</Button>
              <Button variant="secondary" disabled>secondary</Button> 
            </div> 
            <div className="flex gap-2">
              <Button variant="tertiary">tertiary</Button>
              <Button variant="tertiary" disabled>tertiary</Button>
            </div> 
            <div className="flex gap-2">
              <Button variant="warning">warning</Button>
              <Button variant="warning" disabled>warning</Button> 
            </div> 
          </div>

          <div className="flex gap-2">
            <Checkbox checked={checkboxhValue} size="small" onClick={() => setCheckboxhValue(prev => !prev)}/>
            <Checkbox checked={checkboxhValue} size="small" disabled/>
            <Checkbox checked={checkboxhValue} onClick={() => setCheckboxhValue(prev => !prev)}/>
            <Checkbox checked={checkboxhValue} disabled/>
            <Checkbox checked={checkboxhValue} size="large" onClick={() => setCheckboxhValue(prev => !prev)}/>
            <Checkbox checked={checkboxhValue} size="large" disabled/>
          </div>

          <Switch checked={switchValue} onClick={() => setSwitchValue(prev => !prev)}/>

          <Input className="focus-visible:border-primary-300 focus-visible:shadow-primary-input" value={inputValue} onChange={(event)=> setInputValue(event.target.value)} placeholder="default input"/>
          <Input className="focus-visible:border-primary-300 focus-visible:shadow-primary-input" placeholder="default input" disabled/>
          <Input className="border-palette-red focus-visible:shadow-error-input" value={errorInputValue} onChange={(event)=> setErrorInputValue(event.target.value)} placeholder="error input"/>


          <Select.Select
            value={selectedOption} onValueChange={(value) => {
                setSelectedOption(value);
            }}
          >
            <Select.SelectTrigger className="h-10 border-none">
              <Select.SelectValue />
            </Select.SelectTrigger>
            <Select.SelectContent>
              <Select.SelectItem value="전체">전체</Select.SelectItem>
              <Select.SelectItem value="명동엘로세움">명동엘로세움</Select.SelectItem>
              <Select.SelectItem value="이편한세상 한숲시티">이편한세상 한숲시티</Select.SelectItem>
              <Select.SelectItem value="창원 롯데캐슬 하버팰리스">창원 롯데캐슬 하버팰리스</Select.SelectItem>
              <Select.SelectItem value="대구 롯데몰">대구 롯데몰</Select.SelectItem> 
              <Select.SelectItem value="대구 롯데몰">대구 롯데몰</Select.SelectItem> 
              <Select.SelectItem value="대구 롯데몰">대구 롯데몰</Select.SelectItem> 
            </Select.SelectContent>
          </Select.Select> 
        </div>
      </main> 
    </div>
  );
}
