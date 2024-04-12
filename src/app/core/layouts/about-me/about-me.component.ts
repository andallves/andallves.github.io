import { Component } from '@angular/core';
import { CustomTextComponent } from '#shared/components/custom-text/custom-text.component';
import { NgOptimizedImage } from '@angular/common';
import { Icon } from '../../models/entities/icon';
import { Image } from '../../models/entities/image';
import { ImageComponent } from '#shared/components/image/image.component';
import { HeadingComponent } from '#shared/components/heading/heading.component';
import { LoadingComponent } from '#shared/components/loading/loading.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CustomTextComponent,
    NgOptimizedImage,
    ImageComponent,
    LoadingComponent,
    HeadingComponent,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  headingIcon: Icon = {
    path: './assets/about.png',
    height: '22',
    width: '22',
    altText: 'about imagem',
  };

  aboutImage: Image = {
    path: './assets/profile.jpg',
    width: '300',
    height: '300',
    altText: 'profile photo',
  };
}
