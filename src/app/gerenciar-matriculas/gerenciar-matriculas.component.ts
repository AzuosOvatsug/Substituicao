import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gerenciar-matriculas',
  templateUrl: './gerenciar-matriculas.component.html',
  styleUrls: ['./gerenciar-matriculas.component.css']
})
export class GerenciarMatriculasComponent implements OnInit {
  matriculas = [];
  totalalunos = 0;
  AM = 0;
  AT = 0;
  CA = 0;
  EV = 0;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getMatriculas().subscribe(matriculas => {
      this.matriculas = matriculas;
      for(let i=0 ; i<this.matriculas.length ; i++){
        this.totalalunos++
        if(this.matriculas[i].situacao === 'AM'){
          this.AM++
        }
        if(this.matriculas[i].situacao === 'AT'){
          this.AT++
        }
        if(this.matriculas[i].situacao === 'CA'){
          this.CA++
        }
        if(this.matriculas[i].situacao === 'EV'){
          this.EV++
        }
      }
      this.AM = (this.AM/this.totalalunos)*100;
      this.AT = (this.AT/this.totalalunos)*100;
      this.CA = (this.CA/this.totalalunos)*100;
      this.EV = (this.EV/this.totalalunos)*100;
    });
  }

}
