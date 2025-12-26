
import { UserRole } from '../../enum/user.enum';

export interface UserDto{
    username: string;
    email: string;
    role: UserRole;
    isActive: boolean;
    participantId: string;
    participantName: string;
    lastLoginAt: Date;
}