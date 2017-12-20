import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gerenciar-matricula',
  templateUrl: './gerenciar-matricula.component.html',
  styleUrls: ['./gerenciar-matricula.component.css']
})
export class GerenciarMatriculaComponent implements OnInit {
  matriculaId = null;
  turma = null;
  aluno = null;
  situacao = null;
  alunos = [];
  turmas = [];
  status = null;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.matriculaId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.api.getAlunos().subscribe(alunos => this.alunos = alunos);
    this.api.getTurmas().subscribe(turmas => this.turmas = turmas);
  }

  editar(){
    this.api.alterarMatricula(this.matriculaId, parseInt(this.turma), parseInt(this.aluno), this.situacao)
    .subscribe(
      () => this.status = true,
      () => this.status = false
    )
  }

}
