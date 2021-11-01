import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value == null || value === '')
      return '';

    let dataHora = value.toString().split('T');

    if (dataHora.length < 2)
      return '';

    let data = dataHora[0].split('-');
    let dataFinal = '';
    if (data.length > 2)
      dataFinal = data[2] + "/" + data[1] + "/" + data[0];

    let hora = dataHora[1].split(':');
    let horaFinal = '';
    if (hora.length > 2)
      horaFinal = hora[0] + ":" + hora[1];

    if (dataFinal === '' || horaFinal === '')
      return '';

    /*2021-09-24T21:27:57*/
    return dataFinal + ' ' + horaFinal;
  }
}
