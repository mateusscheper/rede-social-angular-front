import { Component, OnInit } from '@angular/core';
import {ReportDTO} from "../../../models/report-dto.model";
import {AdminService} from "../../../services";

@Component({
  selector: 'app-configuracoes',
  host: {
    class: 'row'
  },
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  reports: ReportDTO[];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.consultarReports()
      .subscribe(response => this.reports = response)
  }

}
