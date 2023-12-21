import { IsString } from 'class-validator';

export class StudentCreateDto {
  @IsString()
  uid: string;
  @IsString()
  id: string;
  @IsString()
  name: string;
}
