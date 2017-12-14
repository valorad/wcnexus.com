import { Component, OnInit } from '@angular/core';

// services
import { ThemeService } from '../_services/theme.service';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	dummyAvt: any[] = [];

	constructor(
		public themeService: ThemeService
	) { }
	
	ngOnInit() {
		this.themeService.config.current = "mat-blue-pink";
		for (let i = 0; i < 30; i++) {
			this.dummyAvt.push({
				title: i,
				img: null
			})
		}
	}

}