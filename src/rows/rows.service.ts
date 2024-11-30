import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Row } from '@prisma/client';

@Injectable()
export class RowsService {
  constructor(private prisma: PrismaService) { }

  create(createRowDto: Partial<Row>) {
    return this.prisma.row.create({ data: createRowDto })
  }

  findAll() {
    return this.prisma.row.findMany()
  }

  findOne(id: number) {
    return this.prisma.row.findFirst({ where: { id } })
  }

  update(id: number, updateRowDto: Partial<Row>) {
    return this.prisma.row.update({ data: updateRowDto, where: { id } })
  }

  remove(id: number) {
    return this.prisma.row.delete({ where: { id } })
  }
}
