import { ElementRef, Renderer2 } from '@angular/core';
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
    component?: any;                    // Component to inyect into DialogComponent
    templateType: DialogTemplateType;   // Type of tempalte to use, inyected component or message
    overlayBlur?: boolean;              // Overlay should be blury (css selector)
    overlayCustomRender?: Renderer2,    // Renderer of the element for the targeted overlay
    overlayCustomElement?: ElementRef,  // ElementRef of the element for the targeted overlay
    matDialogConfig?: MatDialogConfig;  // Material dialog options
    dialogContent?: DialogContent;      // Message props for alerts and confirm dialogs
}

export interface DialogResponse {
    action: string;
    data?: any;
}
