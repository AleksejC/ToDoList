export type Task = {
    name: string;
    description: string;
    status: Status;
    id: string;
}

export enum Status {
    TO_DO = 'TO_DO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

export interface TaskProps {
    task: Task;
}