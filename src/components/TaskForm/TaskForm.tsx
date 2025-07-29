import {useState} from "react"
import type { TaskFormData } from '../../types'

export default function TaskFormData(){
    const [formData, setFormData] = useState<TaskFormData>({
        id: '',
        taskDescription: '',
        category: '',
        status: '',
        dueDate: new Date(),
        notes: '',

       
    });

    return (
        <form>
            {}
        </form>
    );
}