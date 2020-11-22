import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceryService } from '../service/grocery.service';
import { InputDialogService } from '../service/input-dialog.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Groceries";

  

  constructor(public toastController: ToastController, 
    public alertController: AlertController, 
    public dataService: GroceryService, 
    public inputDialog: InputDialogService,
    public socialSharing: SocialSharing) { }

  loadItems(){
    return this.dataService.getItems();
  }
  async editItem(item, index) {
    const toast = await this.toastController.create({
      message: 'Editing Item: ' + item.name,
      duration: 5000,
      position: 'bottom',
      animated: true,
      color: 'warning',
    });
    toast.present();  // displays toast 
    this.inputDialog.saveItem(item, index);
  }

  async shareItem(item, index) {
    const toast = await this.toastController.create({
      header: 'Sharing...',
      message: 'Item shared: ' + item.name,
      duration: 3000,
      position: 'bottom',
      animated: true,
      color: 'success',
    });
    toast.present();  // displays toast 
    
    let message = "Can you get " + item.qty + " " + item.unit + " of " + item.name + " when you stop at the store?"
    let subject = "Needed grocery item"

    this.socialSharing.canShareViaEmail().then(()=>{
      this.socialSharing.shareViaEmail(message, subject, ['ihate3putts@hotmail.com']).then(() => {
        console.log("Shared via email");
      }).catch((error) => {
        console.log("Share via email failed: ",error);
      });
    }).catch((error)=>{
      console.log("Cannot share via email: ", error);
    });
  }

  async removeItem(item, index) {
    const toast = await this.toastController.create({
      header: 'Removing...',
      message: 'Item removed: ' + item.name,
      duration: 2000,
      position: 'middle',
      animated: true,
      color: 'success',
    });
    toast.present();  // displays toast 
    this.dataService.removeItem(index)
  }

  addItem(){
    this.inputDialog.saveItem();
  }

}

