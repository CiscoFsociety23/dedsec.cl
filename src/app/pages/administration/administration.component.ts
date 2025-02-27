import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminPanelComponent } from '@components/admin-panel/admin-panel.component';
import { UserEditionComponent } from '@components/user-edition/user-edition.component';
import { UserRegistryComponent } from '@components/user-registry/user-registry.component';
import { User } from '@interfaces/user';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { SessionCheckService } from '@services/session-check.service';

@Component({
    standalone: true,
    selector: 'app-administration',
    imports: [AdminPanelComponent, NotFoundComponent, UserRegistryComponent, UserEditionComponent],
    templateUrl: './administration.component.html',
    styleUrl: './administration.component.css'
})
export class AdministrationComponent implements OnInit {

  private tokenChecker: SessionCheckService = new SessionCheckService(this.http);
  public creationForm: boolean = false;
  public editionForm: boolean = false;
  public usuario: User | null = null;
  public userName: string = "";

  constructor(private http: HttpClient) {
    // Obtiene el correo del usuario actual
    const user: string = localStorage.getItem('x-api-user') || '!';
    this.userName = atob(user);
  }

  ngOnInit(): boolean {
    return this.tokenChecker.checkToken()
  };

  public profile(): string {
    const token: string = localStorage.getItem('auth') || '!';
    return this.tokenChecker.checkProfile(token);
  };

  public refesh(): void {
    location.reload();
  };

  public showCreationForm(): void {
    this.creationForm == false ? this.creationForm = true : this.creationForm = false;
  };

  public closeCreationForm(): void {
    this.creationForm == false ? this.creationForm = true : this.creationForm = false;
  };

  public editionComponent($event: User): void {
    this.editionForm == false ? this.editionForm = true : this.editionForm = false;
    this.usuario = $event;
  };

  public closeEditionComponent(): void {
    this.editionForm == false ? this.editionForm = true : this.editionForm = false;
  };

}
