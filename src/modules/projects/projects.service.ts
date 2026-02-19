import { Injectable } from '@nestjs/common'
import { ProjectRequestDTO } from './projects.dto'

@Injectable()
export class ProjectsService {
  findAll() {
    return ['teste 1', 'teste 2']
  }

  findById(id: string) {
    return 'busca by id '
  }

  create(data: ProjectRequestDTO) {
    return 'create teste 1'
  }

  update(id: string, data: ProjectRequestDTO) {
    return 'update teste 1'
  }

  remove(id: string) {
    return 'remove teste 1'
  }
}
