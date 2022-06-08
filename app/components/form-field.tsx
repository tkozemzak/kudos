//reusable component form individual form fields
interface FormFieldProps {
    htmlFor: string
    label: string
    type?: string
    value: any
    onChange?: (...args: any) => any
}

const FormField = ({ htmlFor, label, type = "text", value, onChange = () => { } }: FormFieldProps) => {
    return (
        <>
            <label htmlFor={htmlFor} className="text-blue-600 font-semibold">
                {label}
            </label>
            <input onChange={onChange} type={type} id={htmlFor} name={htmlFor} className="w-full p-2 rounded-xl my-2" value={value} />
        </>
    )
}

export default FormField