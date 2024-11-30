import { ApiProperty } from "@nestjs/swagger";
import { Category, Row, Status } from "@prisma/client";

export class RowEntity implements Row {
  @ApiProperty()
  id: number;

  @ApiProperty({ required: false })
  name: string | null

  @ApiProperty({ required: false })
  category: Category | null

  @ApiProperty({ required: false })
  description: string | null
  
  @ApiProperty({ required: false })
  owner: string | null

  @ApiProperty({ required: false })
  price: number | null

  @ApiProperty({ required: false })
  status: Status | null

  @ApiProperty({ required: false })
  date: Date | null

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
