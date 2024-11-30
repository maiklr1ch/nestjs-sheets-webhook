import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RowsService } from "./rows.service";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { RowEntity } from "./entities/row.entity";
import { Logging } from "src/decorators/logging.decorator";
import { Row } from "@prisma/client";
import { Request } from "express";
import { EmailService } from "src/email/email.service";

@Controller('rows')
@ApiTags('rows')
export class RowsController {
  constructor(private readonly rowsService: RowsService, private readonly emailService: EmailService) { }

  @Get()
  @ApiOkResponse({ type: RowEntity, isArray: true })
  getAll(@Logging() _req: Request) {
    return this.rowsService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({ type: RowEntity })
  getOne(@Param("id") id: number, @Logging() _req: Request) {
    return this.rowsService.findOne(id)
  }

  @Post('process-data')
  async processData(@Body() data: string, @Logging() _req: Request) {
    const { column, row, value } = JSON.parse(data)
    if (this.rowsService.isRowExists(row))
      return this.rowsService.update(row, { [column]: value })
    else this.rowsService.create({ id: row, [column]: value })
    if(row % 10 === 0) {
      const data = await this.rowsService.findAll() 
      this.emailService.send(process.env.SEND_TO_EMAIL, JSON.stringify(data))
    }
  }
}