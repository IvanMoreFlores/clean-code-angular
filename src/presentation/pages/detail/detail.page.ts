import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../domain/entities/product.entity';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.css'],
  imports: [CommonModule, NavbarComponent],
  standalone: true,
})
export class DetailPage {
  private route = inject(ActivatedRoute);
  PRODUCT?: any;
  imageFirst: string = '';

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const productJson = params.get('product');
      if (productJson) {
        this.PRODUCT = JSON.parse(productJson);
        this.imageFirst = this.PRODUCT.images[0];
      }
    });
  }

  onClickImage(image: string): void {
    this.imageFirst = image;
  }
}
