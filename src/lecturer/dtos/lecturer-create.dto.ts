import { IsString } from 'class-validator';

export class LecturerCreateDto {
  @IsString()
  uid: string;
  @IsString()
  id: string;
  @IsString()
  name: string;
}
