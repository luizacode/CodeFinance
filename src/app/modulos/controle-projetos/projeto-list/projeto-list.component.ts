import { Component, OnInit } from "@angular/core";
import { Projeto } from "../../models/projeto.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-projeto-list",
  templateUrl: "./projeto-list.component.html",
  styleUrls: ["./projeto-list.component.css"]
})
export class ProjetoListComponent implements OnInit {
  projetos: Projeto[] = [];
  projetoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.projetoFormBuilder()
  }

  projetoFormBuilder() {
    this.projetoForm = this.formBuilder.group({
      nome: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(50)]
      ],
      valor: [
        '',
        [Validators.required]
      ]
    });
  }

  salvarListaProjetos = () => { this.projetos.push(this.projetoForm.value); console.log(this.projetos); }
}
