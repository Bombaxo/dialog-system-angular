import { Renderer2 } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

import { Button } from './button.interface';

export type DialogTemplateType = 'message' | 'component';

export interface DialogContent {
    image?: string;
    title: string;
    content: string[];
    primaryButton: Button;
    secondaryButton?: Button;
}
export interface DialogConfig {
    showCloseIcon?: boolean;            // Display right corner dialog close button
    component?: any;                    // Component instance to inyect inside DialogComponent
    templateType: DialogTemplateType;   // Set the tempalte to use, inyected component or message
    backDropBlur?: boolean;             // Overlay should be blury (css selector)
    backDropCustomElement?: Renderer2,  // Renderer of the element for the targeted overlay
    matDialogConfig?: MatDialogConfig;  // Material dialog options
    dialogContent?: DialogContent;      // Message content for alerts and confirm actions dialogs
}

export interface DialogResponse {
    action: string;
    data?: any;
}
