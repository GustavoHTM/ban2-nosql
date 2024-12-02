import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../components/breadcrumb/breadcrumb.component";
import { BreadcrumbItemComponent } from "../../../components/breadcrumb-item/breadcrumb-item.component";
import { ContainerComponent } from "../../../components/container/container.component";
import { IllustrationComponent } from "../../../components/illustration/illustration.component";

@Component({
  selector: 'app-error-page',
  standalone: true,
    imports: [
        BreadcrumbComponent,
        BreadcrumbItemComponent,
        ContainerComponent,
        IllustrationComponent
    ],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent {

}
