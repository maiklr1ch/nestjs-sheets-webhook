import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { RowsService } from './rows.service';
import { Row } from '@prisma/client';

@WebSocketGateway()
export class RowsGateway {
  constructor(private readonly rowsService: RowsService) { }

  @SubscribeMessage('createRow')
  create(@MessageBody() createRowDto: Partial<Row>) {
    return this.rowsService.create(createRowDto);
  }

  @SubscribeMessage('findAllRows')
  findAll() {
    return this.rowsService.findAll();
  }

  @SubscribeMessage('findOneRow')
  findOne(@MessageBody() id: number) {
    return this.rowsService.findOne(id);
  }

  @SubscribeMessage('updateRow')
  update(@MessageBody() updateRowDto: Partial<Row>) {
    return this.rowsService.update(updateRowDto.id, updateRowDto);
  }

  @SubscribeMessage('removeRow')
  remove(@MessageBody() id: number) {
    return this.rowsService.remove(id);
  }
}
