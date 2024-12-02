import { Component, Input } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss'
})
export class FormComponent {
    @Input() method: "POST" | "GET" = "POST"
    @Input() action: string = "#"
    @Input() inline: boolean = false
}
