import { MatDialogConfig } from '@angular/material/dialog';
import { Button } from './button.interface';

export type DialogTemplateType = 'message' | 'confirmation' | 'component';

export interface DialogContent {
    image?: string;
    title: string;
    content: string[];
    primaryButton: Button;
    secondaryButton?: Button;
}
export interface DialogConfig {
    showCloseIcon?: boolean;
    templateType: DialogTemplateType;
    matDialogConfig?: MatDialogConfig; // For additional data pass it inside matDialogConfig.data
    dialogContent?: DialogContent;
}

export interface DialogResponse {
    action: string;
    data?: any;
}
