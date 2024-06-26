import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '#core/components/logo/logo.component';
import { SocialMediaComponent } from '#shared/components/social-media/social-media.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [LogoComponent, SocialMediaComponent, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @ViewChild('skills') pageSkills!: ElementRef;
  goToSkills() {
    this.pageSkills.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
