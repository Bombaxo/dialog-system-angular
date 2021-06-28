export interface Button {
    label: string;
    icon?: string;
    action?: string;
    class?: string;
    color?: 'primary' | 'accent' | 'danger' | 'warn'| 'success';
    size?: 'sm' | 'md' | 'lg';
}
