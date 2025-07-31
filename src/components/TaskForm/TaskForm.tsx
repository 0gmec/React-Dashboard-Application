import { useState } from "react"
import type { TaskFormData } from '../../types'



export default function TaskFormData() {
    const SubmitForm: React.FC = () => {
        const [formData, setFormData] = useState<TaskFormData>({
            id: "",
            taskDescription: "",
            category: "",
            status: "",
            dueDate: "",
            notes: ""
        })
        const [error, setError] = useState<{ [key: string]: string }>({})
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = event.target
            setFormData({ ...formData, [name]: value });
    }

const handleValidation = () => {
    const errors: { [key: string]: string } = {};
    let formDataIsValid = true;

    if (!formData.taskDescription) {
        formDataIsValid = false;
        errors["taskDescription"] = "Cannot be empty";
    
    } else if (typeof error["taskDescription"] !== "undefined") {
        if (!error["taskDescription"].match(/^[a-z]+$/)) {
            formDataIsValid = false;
            errors["taskDescription"] = "Only letters";
        }
    }
if (!formData.category) {
    formDataIsValid = false
    errors["category"] = "Cannot be empty"
}

if (!formData.status) {
    formDataIsValid = false
    errors["status"] = "Status cannot be empty"
}

if (!formData.dueDate) [
    formDataIsValid = false
   
]

    setError(errors)
     return formDataIsValid
}

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            const formDataIsValid = handleValidation()
            if (formDataIsValid)
            alert(`Submitting formData: ${formData}`);
}
        return (
            <form name="taskForm" onSubmit={handleSubmit}>
                <label htmlFor="">Task Description</label>
                <input type="text" name="taskDescription" value={formData.taskDescription}
                    onChange={handleChange} />
                <div>
                    <label htmlFor="">Category</label>
                    <input type="text" name="category" value={formData.category}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Status</label>
                    <input type="text" name="status" value={formData.status}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Due Date</label>
                    <input type="text" name="Date" value={formData.dueDate}
                        onChange={handleChange}
                    />

                </div>
                <div>
                    <label htmlFor="">Notes</label>
                    <input type="text" name="notes" value={formData.notes}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>

            </form>
        )
    }
    return <SubmitForm/>
}

