import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { SessionCheckService } from '@services/session-check.service';

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [NotFoundComponent],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent implements OnInit {
  
  constructor(private http: HttpClient) {}
  
  private tokenChecker: SessionCheckService = new SessionCheckService(this.http);

  ngOnInit(): boolean {
    return this.tokenChecker.checkToken()
  };

}
