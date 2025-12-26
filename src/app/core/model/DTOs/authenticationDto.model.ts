import { UserDto } from './userDto.model';

export interface LoginResponseDto{
    isSuccess: boolean;
    token: string;
    user: UserDto;
    errorMessage: string;
    tokenExpiration: Date;
}