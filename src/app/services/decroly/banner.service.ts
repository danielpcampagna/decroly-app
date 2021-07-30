import { Injectable } from '@angular/core';
import { IService } from '../rest-interface.service';
import { Banner } from '../../bases/banner.base';
import { environment } from 'src/environments/environment';

@Injectable()
export class BannerService extends IService<Banner> {
  protected path: string = `${environment.decroly_api_url}/ecommerce/banner`;
}
