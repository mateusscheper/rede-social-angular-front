import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReportDTO} from "../../../models/report-dto.model";
import {AdminService} from "../../../services";

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.css']
})
export class ReportModalComponent implements OnInit {

  report: ReportDTO;

  @Input()
  tipo: any;

  @Input()
  id: number;

  @Output() onReportEnviado: EventEmitter<any> = new EventEmitter<any>();

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.init();
  }

  public init() {
    this.report = new ReportDTO();
    this.report.id = this.id;
    this.report.tipo = this.tipo;
    this.report.conteudo = "";
  }

  reportar() {
    this.adminService.reportar(this.report)
      .subscribe(() => this.onReportEnviado.emit())
  }
}
