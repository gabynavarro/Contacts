import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { NzInputModule} from 'ng-zorro-antd/input'
import { NzButtonModule} from 'ng-zorro-antd/button'
import { NzTableModule } from 'ng-zorro-antd/table';
import { Person } from './interface/person.interface';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ContactsService } from './services/contacts.service'

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule, NzInputModule, NzButtonModule,NzTableModule,NzDividerModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
value:string =""
listOfData: Person[] = []

  constructor(private contactService:ContactsService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getContacts();
  }

  private getContacts() {
    this.contactService.getContacts().subscribe(people => {
      this.listOfData = people;
    });
  }
}
