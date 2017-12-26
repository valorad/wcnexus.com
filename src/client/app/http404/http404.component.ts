import { Component, OnInit } from '@angular/core';

// services
import { ThemeService } from '../_services/theme.service';

@Component({
	selector: 'app-http404',
	templateUrl: './http404.component.html',
	styleUrls: ['./http404.component.scss']
})
export class Http404Component implements OnInit {
	constructor(
		public themeService: ThemeService
	) { }
	
	ngOnInit() {}

}