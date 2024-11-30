import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RowsService } from "./rows.service";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { RowEntity } from "./entities/row.entity";
import { Logging } from "src/decorators/logging.decorator";
import { Row } from "@prisma/client";

@Controller('rows')
@ApiTags('rows')
export class RowsController {
  constructor(private readonly rowsService: RowsService) { }

  @Get()
  @ApiOkResponse({ type: RowEntity, isArray: true })
  getAll(@Logging() _req: Request) {
    return this.rowsService.findAll()
  }

  @Get(':id')
  //@Logging()
  @ApiOkResponse({ type: RowEntity })
  getOne(@Param("id") id: number, @Logging() _req: Requestr) {
    return this.rowsService.findOne(id)
  }

  @Post('process-data')
  processData(@Body() data: string, @Logging() _req: Request) {
    const { column, row, value } = JSON.parse(data)
    if (this.rowsService.isRowExists(row))
      return this.rowsService.update(row, { [column]: value })
    else this.rowsService.create({ id: row, [column]: value })
  }
}