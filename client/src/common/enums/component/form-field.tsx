import { HTMLInputTypeAttribute } from "react";

interface FormFieldProps {
  name: string;
  label: string;
  value: string | undefined|number|null;
  onChange: (newValue: string) => void;
  type?: HTMLInputTypeAttribute;
  classItemName: any;
  classItemBlock: any;
}
export function FormField(props: FormFieldProps): JSX.Element {
  const { name, label, value, onChange, type = "text", classItemName, classItemBlock } = props;
  
  return (
    <div className={classItemBlock}>
      <div className={classItemName}>
        <label htmlFor={name}>{label}</label>
      </div>
      <input name={name} 
       type={type} 
       style={{minHeight:'30px'}}
       value={value ??undefined} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}
