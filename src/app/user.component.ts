import {Component} from '@angular/core';
import{AngularFirestore, AngularFirestoreCollection , AngularFirestoreDocument} from 'angularfire2/firestore';
import{Router} from '@angular/router';
import{map} from 'rxjs/operators';
import {LoginService} from './login.service';

interface User{
    name : string;
    email: string;
    image_url: string;
}
@Component({
    selector:'users',
    templateUrl:'./user.component.html'
})
export class UsersComponent{
    usersCol: AngularFirestoreCollection<User>;
    users: any;
    constructor(private afs: AngularFirestore , private _router: Router , private _loginservice : LoginService){

    }
    ngOnInit(){
        this.usersCol = this.afs.collection('users/' + this._loginservice.loggedInUser + "/clients/");
        this.users = this.usersCol.snapshotChanges()
        .pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data() as User;
                    const id = a.payload.doc.id;
                    return{id, data};

                });
            })
        );
    }
    add(){
        this._router.navigate(['add']);
    }

    delete(userId,name){
        if(confirm("Are you sure want to delete" + name + "?")){
            this.afs.doc('users/'+this._loginservice.loggedInUser + "/clients/"+userId).delete();
        }
    }
}