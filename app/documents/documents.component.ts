import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
	documents: Document[] = [
		{
			title: "My First Doc",
			description: 'asdfasdfasdf asdfasd',
			file_url: 'http://google.com',
			updated_at: '11/11/16',
			image_url: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Yu_Yu_Hakusho_logo.png',
		},
		{
			title: "My Second Doc",
			description: 'asdfasdfasdf asdfasd',
			file_url: 'http://google.com',
			updated_at: '11/11/16',
			image_url: 'https://static.pexels.com/photos/34123/pexels-photo.jpg',
		},
		{
			title: "My Last Doc",
			description: 'asdfasdfasdf asdfasd',
			file_url: 'http://google.com',
			updated_at: '11/11/16',
			image_url: 'http://i.imgur.com/PRg3IbO.jpg',
		}
	]
}