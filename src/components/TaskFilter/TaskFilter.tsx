import { useState } from "react"
import { TaskFilterDataProps } from "../../types"

export default function TaskFilterDataProps() {
    const [status, setStatus] = useState({ "All"})
    const [priority, setPriority] = useState({ "All"})
    const filters = {
        "status": ["Pending", "In-Progress", "Incompleted", "Overdue"]
        "priority": ["low", "medium", "high"]
    }

    all.filter((task) => {
        if (Object.keys(filters).length>0 ) {
            for (const key in filters) {
                if (task[key] === undefined || !filters[key].includes (task[key])) {
                    return null
                }
            }
        }
        return task
    }