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
  //@Logging()
  @ApiOkResponse({ type: RowEntity, isArray: true })
  getAll() {
    return this.rowsService.findAll()
  }

  @Get(':id')
  //@Logging()
  @ApiOkResponse({ type: RowEntity })
  getOne(@Param("id") id: number) {
    return this.rowsService.findOne(id)
  }

  @Post('process-data')
  processData(@Body() data: any) {
    console.log(data)
    return data
  }
}