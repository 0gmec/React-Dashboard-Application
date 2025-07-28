export interface TaskItem {
    id?: string,
    taskDescription: string,
    category: string,
    status: string,
    dueDate: Date,
    notes?: string,
}

export interface TaskItemProps {
    task: TaskItem[],
    status: "Completed" | "In Progress" | "OverDue",
    onDelete?: (taskId: string) => void,
    onEdit?: (taskId: string) => void,
    onSubmit?: (taskId: string)=> void

}

export interface TaskListProps extends TaskItemProps{
    onAddTask?: (taskId: TaskItem)=> void
}

export interface TaskFormData {
    id?: string,
    taskDescription: string,
    category: string,
    status: string,
    dueDate: Date,
    notes?: string,
}

export interface TaskFormDataProps {

}

export interface TaskFilterData  {
filterCategory?: string,
filterStatus?: string,

}

export interface TaskFilterDataProps {
    filter: TaskFilterData[]
}