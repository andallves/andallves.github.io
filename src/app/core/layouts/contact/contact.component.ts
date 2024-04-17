import { Component } from '@angular/core';
import { HeadingComponent } from '#shared/components/heading/heading.component';
import { ButtonDefaultComponent } from '#shared/components/button-default/button-default.component';
import { Icon } from '#core/models/entities/icon';
import { LoadingComponent } from '#shared/components/loading/loading.component';
import { contactIcon, emailIcon, whatsappIcon } from '#core/data/icons';
import { BackToTopComponent } from '#shared/components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    HeadingComponent,
    ButtonDefaultComponent,
    BackToTopComponent,
    LoadingComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactIcon: Icon = contactIcon;
  whatsappIcon: Icon = whatsappIcon;
  emailIcon: Icon = emailIcon;
}
