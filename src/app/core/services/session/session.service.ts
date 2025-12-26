import { Injectable, Inject, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private key: string = 'pds__session';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  set(data: { [key: string]: any }) {
    if (!this.isBrowser) return;
    const current = this.get();
    const updated = { ...current, ...data };
    localStorage.setItem(this.key, JSON.stringify(updated));
  }

  get(key?: string) {
    if (!this.isBrowser) return key ? null : {};
    const datas = localStorage.getItem(this.key) as any;

    let data;
    if (datas) {
      data = JSON.parse(datas);
    }

    if (!data) {
      return key ? null : {};
    }

    return key ? data[key] : data;
  }

  remove(key?: string) {
    if (!this.isBrowser) return;
    const datas = localStorage.getItem(this.key) as any;

    if (!datas) return;

    const data = JSON.parse(datas);

    if (key) {
      delete data[key];
      localStorage.setItem(this.key, JSON.stringify(data));
    } else {
      localStorage.removeItem(this.key);
    }
  }
}
