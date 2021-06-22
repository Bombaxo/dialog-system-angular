export interface Button {
    label: string;
    action?: string;
    class?: string;
    color?: 'primary' | 'success' | 'accent' | 'warn';
    size?: 'sm' | 'md' | 'lg';
}
