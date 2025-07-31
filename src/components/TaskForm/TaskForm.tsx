import { useState } from "react"
import type { TaskFormData } from '../../types'



const TaskForm: React.FC = () => {
    const [formData, setFormData] = useState<TaskFormData>({
        id: 1,
        taskDescription: "SBA-9",
        category: "School",
        status: "In-progress",
        dueDate: "2025-07-30",
        notes: ""
    })
    
    const [error, setError] = useState<{ [key: string]: string }>({})
    //  Handler 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setFormData({ ...formData, [name]: value });
    }
    // form validation
    const handleValidation = () => {
        const errors: { [key: string]: string } = {};
        let formDataIsValid = true;

        if (!formData.taskDescription) {
            formDataIsValid = false;
            errors["taskDescription"] = "Cannot be empty";
        
        } 
            
        
        if (!formData.category) {
            formDataIsValid = false
            errors["category"] = "Cannot be empty"
        }

        if (!formData.status) {
            formDataIsValid = false
            errors["status"] = "Status cannot be empty"
        }

        if (!formData.dueDate) {
            formDataIsValid = false
            errors["date"] = "Select a Date"
        }

        setError(errors)
        return formDataIsValid
    }
    // hnadler for submit
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formDataIsValid = handleValidation()
        if (formDataIsValid)
        alert(`Submitting formData`);

    }

    return (
        <form name="taskForm" onSubmit={handleSubmit}>
            <label htmlFor="">Task Description</label>
            <input type="text" id="taskDescription" name="taskDescription" value={formData.taskDescription}
                onChange={handleChange} />
            <div>
                <label htmlFor="">Category</label>
                <input type="text" id="category" name="category" value={formData.category}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="">Status</label>
                <input type="text" id="status" name="status" value={formData.status}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="">Due Date</label>
                <input type="date" id="date"  name="dueDate" value={formData.dueDate}
                    onChange={handleChange}
                />

            </div>
            <div>
                <label htmlFor="">Notes</label>
                <input type="text" id="notes" name="notes" value={formData.notes}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>

        </form>
    )
}

export default TaskForm


