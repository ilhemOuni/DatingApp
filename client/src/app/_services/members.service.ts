import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MemberDetailComponent } from '../members/member-detail/member-detail.component';
import { Member } from '../_modules/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  baseUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

   getMembers()
  {
    return this.http.get<Member[]>(this.baseUrl+'users');
  }

 getMember(username :string) 
  {
    return this.http.get<Member>(this.baseUrl+'users/'+ username);
  }
}
