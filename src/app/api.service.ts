import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  SalvarMatricula(turmaId: number, alunoId: number): Observable<any> {
    const situacao = 'AM'
    const matricula = {turmaId: turmaId, alunoId: alunoId, situacao: situacao};
    return this.http.post(this.API_URL + '/matriculas', matricula);
  }

  getTurmas(): Observable<any> {
    return this.http.get(this.API_URL + '/turmas');
  }

  alterarMatricula(matriculaId:number, turmaId: number, alunoId: number, situacao: String): Observable<any> {
    const matricula = {turmaId: turmaId, alunoId: alunoId, situacao: situacao};
    return this.http.patch(this.API_URL + '/matriculas/' + matriculaId, matricula);
  }

  getAlunos(): Observable<any> {
    return this.http.get(this.API_URL + '/alunos');
  }
  
  getMatriculas(): Observable<any> {
    return this.http.get(this.API_URL + '/matriculas?_expand=turma&_expand=aluno');
  }

  disciplinas(): Observable<any> {
    return this.http.get(this.API_URL + '/disciplinas');
  }

  professores(): Observable<any> {
    return this.http.get(this.API_URL + '/professors');
  }

  horarios(): Observable<any> {
    return this.http.get(this.API_URL + '/horarios');
  }

  alunos(): Observable<any> {
    return this.http.get(this.API_URL + '/alunos');
  }

  matriculas(): Observable<any> {
    return this.http.get(this.API_URL + '/matriculas');
  }

  matriculasNaTurma(turmaId: number): Observable<any> {
    return this.http.get(this.API_URL + '/matriculas?turmaId=' + turmaId);
  }

  professoresNaTurma(turmaId: number): Observable<any> {
    return this.http.get(this.API_URL + '/professoresNasTurmas?turmaId=' + turmaId + '&_expand=professor');
  }

  frequencias(): Observable<any> {
    return this.http.get(this.API_URL + '/frequencias?_expand='
      + 'aluno&_expand=professor&_expand=turma&_expand=disciplina&_expand=horario&_sort=turmaId,alunoId');
  }

  cadastrarFrequencia(turmaId: number, disciplinaId: number, professorId: number,
                      horarioId: number, alunoId: number,
                      data: string, status: string) {
    const registro = {
      turmaId: turmaId, disciplinaId: disciplinaId, professorId: professorId,
      horarioId: horarioId, alunoId: alunoId,
      data: data, status: status
    };
    return this.http.post(this.API_URL + '/frequencias', registro);
  }
}
