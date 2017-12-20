import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-matricular-aluno',
  templateUrl: './matricular-aluno.component.html',
  styleUrls: ['./matricular-aluno.component.css']
})
export class MatricularAlunoComponent implements OnInit {
  turmas = [];
  alunos = [];
  turma = null;
  aluno = null;
  status = null;

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getAlunos().subscribe(alunos => this.alunos = alunos);
    this.api.getTurmas().subscribe(turmas => this.turmas = turmas);
  }

  salvar(){
    this.api.SalvarMatricula( parseInt(this.turma), parseInt(this.aluno))
    .subscribe(
      () => this.status = true,
      () => this.status = false
    )
  }

}
