import { Component } from '@angular/core';

@Component({
    selector: 'create-garden',
    templateUrl: './create-garden.component.html'
})

export class CreateGardenComponent {
    newPost = '';
    enteredValue = '';
    
    onAddPost() {
        this.newPost = this.enteredValue;
    }
}