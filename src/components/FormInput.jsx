
function FormInput({ name, type, label, placeholder }) {

    const RenderFormInput = ({ inputType }) => {
        // return inputType;
        switch (inputType) {
            case "text":
                return <input type={inputType} placeholder={placeholder} className="p-[15px] w-full bg-[#fffbf9] rounded-lg border-2 border-neutral-800" name={name} id={name} />

            case "email":
                return <input type={inputType} placeholder={placeholder} className="p-[15px] w-full bg-[#fffbf9] rounded-lg border-2 border-neutral-800" name={name} id={name} />

            case "number":
                return <input type={inputType} placeholder={placeholder} className="p-[15px] w-full bg-[#fffbf9] rounded-lg border-2 border-neutral-800" name={name} id={name} />

            case "select":
                return <>
                    <select className="p-[15px] w-full bg-[#fffbf9] rounded-lg border-2 border-neutral-800" name={name} id={name}>
                        <option>{placeholder}</option>
                        <option>Software Development</option>
                        <option>Tourism & Hospitality</option>
                        <option>Building & Construction</option>
                        <option>Food & Beverage Operations</option>
                        <option>Accounting</option>
                    </select>
                </>

            case "textarea":
                return <textarea placeholder={placeholder} className="text-[#585859] text-lg font-semibold leading-[30px] h-[218px] p-[15px] w-full bg-[#fffbf9] rounded-lg border-2 border-neutral-800" name={name} id={name}></textarea>

            default:
                console.log("invalid form")
                break;
        }
    }

    return (
        <div className="flex flex-col items-start gap-[10px]">
            <label htmlFor={name} className="text-[#4c4c4c] text-[20px] font-semibold leading-[33px]">{label}</label>
            <RenderFormInput inputType={type} />
            {/* {console.log(RenderFormInput(type))} */}
        </div>

    )
}

export default FormInput
