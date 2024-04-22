import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { NzInputModule} from 'ng-zorro-antd/input'
import { NzButtonModule} from 'ng-zorro-antd/button'
import { NzTableModule } from 'ng-zorro-antd/table';
import { Person } from './interface/person.interface';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ContactsService } from './services/contacts.service'
import { NzPaginationModule } from 'ng-zorro-antd/pagination'
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { Contacts } from './interface/contacts.interface';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule, NzInputModule, NzButtonModule,NzTableModule,
    NzDividerModule,NzPaginationModule,NzModalModule,
    NzMessageModule,NzPopconfirmModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',

})
export class ContactsComponent {

value:string =""
listOfData: Contacts[] = []
listOfDataTmp: Contacts[] = []
isVisible:boolean=false
myContact!: Person;
nombre:string=""
telefono:string=""

  constructor(
    private contactService:ContactsService,
    private message: NzMessageService
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getContacts();
  }

  private getContacts() {
    this.contactService.getContacts().subscribe(people => {
      this.listOfData = people;
      this.listOfDataTmp=people
    });
  }

  private saveContacts(){
    const payload: Contacts = {
      name: this.nombre,
      phone: this.telefono,
    }
    this.contactService.postPerson(payload).subscribe(
      (_=>{
        this.message.success('Contacto guardado')
        this.getContacts()
        this.reset()

      })
    )
  }
  deleteContact(_id: string){
    this.contactService.deleteContact(_id).subscribe(_=>{
      this.message.success('Contacto eliminado')
      this.getContacts()
    })
  }
  reset(){
    this.nombre = ''
    this.telefono = ''
  }
  handleOk() {
      //llamar al servicio
      this.saveContacts()
      this.isVisible=false

    }
    handleCancel() {
      this.isVisible=false
    }
    showModal(){
      this.isVisible=true
    }
    search() {
      this.listOfData = this.listOfDataTmp.filter((contact: Contacts)=> contact.name.toLowerCase().indexOf(this.value.toLowerCase()) > -1 )

    }
}
