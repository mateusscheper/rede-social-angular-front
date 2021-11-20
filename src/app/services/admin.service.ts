import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReportDTO} from "../models/report-dto.model";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private URL_API_ADMIN = "http://localhost:8080/api/admin";

  constructor(private httpClient: HttpClient) {
  }

  reportar(reportDTO: ReportDTO): Observable<any> {
    return this.httpClient.post(this.URL_API_ADMIN + "/report", reportDTO);
  }

  consultarReports(): Observable<any> {
    return this.httpClient.get(this.URL_API_ADMIN + "/report");
  }
}
