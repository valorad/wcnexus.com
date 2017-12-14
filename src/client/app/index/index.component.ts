import { Component, OnInit } from '@angular/core';

// services
import { ThemeService } from '../_services/theme.service';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	photoNum = 30;

	dummyAvt: any[] = [];
	dummyTechs: any[] = [];

	fetchphoto: (num: string) => {
		// TO DO...

		// fetch photo from backend
		// e.g. GET /api/photo/0
		// if backend has only 3 photos
		// 1 done, 2 done, 3 done, 4 oh no, get photo 1 again.
		// if backend has no single photo
		// 1 oh no, backend tells us no there is nothing there,
		// so we stop asking backend, and have to just replace every single
		// one with fallback img stored at front.

	};

	constructor(
		public themeService: ThemeService
	) { }
	
	ngOnInit() {
		this.themeService.config.current = "mat-blue-pink";

		// fill photowall with dummy
		for (let i = 0; i < this.photoNum; i++) {
			this.dummyAvt.push({
				title: i,
				img: null
			})
		}

		// dummy tech landfill
		for (let i = 0; i < 15; i++) {
			this.dummyTechs.push({
				title: "A Tech no lo gy",
				descr: "This is an amazing tech. Don't worry, this will be a formal description.",
				img: null,
				link: "https://www.link-to-the-dummy-tech.org.tv"
			})
		}

	}

}