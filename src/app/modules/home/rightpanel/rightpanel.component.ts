import {Component, OnInit} from '@angular/core';
import {NotificacaoService} from "../../../services";
import {NotificacaoDTO} from "../../../models/notificacao-dto.model";

@Component({
  selector: 'rightpanel',
  templateUrl: './rightpanel.component.html',
  styleUrls: ['./rightpanel.component.css']
})
export class RightpanelComponent implements OnInit {

  notificacoes: NotificacaoDTO[];

  constructor(private notificacaoService: NotificacaoService) {
  }

  ngOnInit(): void {
    this.notificacaoService.consultarNotificacoes()
      .subscribe(response => this.notificacoes = response)
  }
}
