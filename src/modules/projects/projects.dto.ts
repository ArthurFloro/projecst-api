import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class ProjectRequestDTO {
  @ApiProperty({ description: 'Project name' })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({ description: 'Project description', required: false })
  description: string

  constructor(name: string, description: string) {
    this.name = name
    this.description = description
  }
}

export class ProjectListItemDTO {
  @ApiProperty() id: string
  @ApiProperty() name: string
  @ApiProperty() description: string
  @ApiProperty({ format: 'date-time' }) createdAt: string
  @ApiProperty({ format: 'date-time' }) updatedAt: string

  constructor(id: string, name: string, description: string, createdAt: string, updatedAt: string) {
    this.id = id
    this.name = name
    this.description = description
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
