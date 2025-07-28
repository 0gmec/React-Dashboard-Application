export interface TaskData {
    id?: string,
    taskDescription: string,
    category: string,
    status: string,
    dueDate: Date,
    notes?: string,
}

export interface TaskDataProps {
    task: TaskData,
    status: "Completed" | "In Progress" | "OverDue",
    onDelete?: (taskId: string) => void,
    onEdit?: (taskId: string) => void,

}

export interface TaskFormData {
    id?: string,
    taskDescription: string,
    category: string,
    status: string,
    dueDate: Date,
    notes?: string,
}