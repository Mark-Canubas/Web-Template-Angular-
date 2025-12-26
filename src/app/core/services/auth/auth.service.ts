import { lastValueFrom } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SessionService } from '../session/session.service';
import { LoginResponseDto } from '../../../core/model/DTOs/authenticationDto.model';
import { UserDto } from '../../../core/model/DTOs/userDto.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly session = inject(SessionService);
  private apiUrl = `${environment.clearingSettlementApiUrl}/Auth`;

  isAuthenticated = signal<boolean>(true);

  async login(credentials: { username: string; password: string }) {
    try {
      const result = (await lastValueFrom(
        this.http.post(`${this.apiUrl}/login`, credentials)
      )) as LoginResponseDto;
      
      this.session.set({
        token: result.token,
        user: result.user
      });
      this.isAuthenticated.set(true);

      return result;
    } catch (error: HttpErrorResponse | unknown) {
      throw (error as HttpErrorResponse).error.message;
    }
  }

  async getUserProfile(): Promise<UserDto | null> {
    try {
      return await lastValueFrom(this.http.get<UserDto>(`${this.apiUrl}/me`));
    } catch (error) {
      throw error;
    }
  }

//   hasRole(roles: UserRole[]): boolean {
//     const user: UserDto = this.session.get('user');
//     return user ? roles.includes(user.role) : false;
//   }

//   async changePassword(dto: ChangePasswordDto): Promise<void> {
//     try {
//       await lastValueFrom(this.http.post(`${this.apiUrl}/change-password`, dto));
//     } catch (error) {
//       throw (error as HttpErrorResponse).error.message;
//     }
//   }

//   async createUser(dto: CreateUserDto): Promise<UserDto> {
//     try {
//       return await lastValueFrom(this.http.post<UserDto>(`${this.apiUrl}/users`, dto));
//     } catch (error) {
//       throw (error as HttpErrorResponse).error.message;
//     }
//   }

//   async validateToken(): Promise<void> {
//     // Validate token saved in session

//     throw new Error('Method not implemented.');
//   }

  async logout() {
    this.session.remove('token');
    this.session.remove('user');
    this.isAuthenticated.set(false);
  }
}
