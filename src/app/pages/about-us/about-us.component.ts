import { Component } from '@angular/core';
import { CorpIdentityComponent } from '@components/corp-identity/corp-identity.component';

@Component({
    standalone: true,
    selector: 'app-about-us',
    imports: [CorpIdentityComponent],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
