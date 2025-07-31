export type TaskStatus ='Pending' | 'In-Progress' | 'Completed' | 'OverDue'

export interface TaskItem {
    id: number,
    taskDescription: string,
    category: string,
    status: TaskStatus,
    priority: 'low' | 'medium' | 'high'
    dueDate: string,
    notes?: string,
}

export interface TaskItemProps {
    task: TaskItem[],
    onStatusChange: (taskId: number, newStatus: string)=> void
    onDelete?: (taskId: string) => void,
    onEdit?: (taskId: string) => void,
    onSubmit?: (taskId: string)=> void,

}



export interface TaskListProps extends TaskItemProps{
    onAddTask?: (taskId: TaskItem)=> void
    onSearch?: (taskId: TaskItem)=> void
    
}

export interface TaskFormData {
    id: 1,
    taskDescription: "SBA-9",
    category: "School",
    status: "In-progress",
    dueDate: "2025-07-30",
    notes?: "",
}

export interface TaskFormDataProps {
formData: TaskFormData
}

export interface TaskFilterData  {
id: "",
    taskDescription: "",
    category: "",
    status: "",
    priority: "",
    dueDate: "",
    notes?: "",
 filterCategory?: string,
filterStatus?: string,

}

// export interface TaskFilterDataProps {
//     onFilterChange: (filters: {
//         status?: TaskStatus
//         priority?: 'low' | 'medium' | 'high'
//     })=> void
// }