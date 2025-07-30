import {useState} from "react"
import type { TaskFormData } from '../../types'

export default function TaskFormData(){
    const SubmitForm: React.FC = () => {
        const [formData, setFormData]= useState<TaskFormData>()
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(event.target.value),
    }
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert(`Submitting formData: ${formData}`),
}
return (
    <form onSubmit={handleSubmit}>
        
    </form>
)
}
    }
 
