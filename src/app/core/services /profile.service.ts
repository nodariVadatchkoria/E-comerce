import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService {

  getProfile() {
    return this.get('user')
  }
  updateProfile(payload: {
    name: string,
    email: string,
    password: string
  }) {
    return this.put('user', payload)
  }
}
