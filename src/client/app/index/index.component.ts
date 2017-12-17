import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

// services
import { DataService } from "@xmj-alliance/lib-ngx";

import { ThemeService } from '../_services/theme.service';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	photoNum = 30;

	// dummyAvt: any[] = [];
	dummyTechs: any[] = [];

	onWallPhotos: any[] = [];
	onWallPhotoBase = "statics/images/photowall/";

	master: any = {};
	xiaomajias: any[] = [];
	userAvatarBase = "statics/images/avatar/";

	fetchphoto: (num: string) => {
		// TO DO... in future (back-end photo fetch)

		// fetch photo from backend
		// e.g. GET /api/photo/0
		// if backend has only 3 photos
		// 1 done, 2 done, 3 done, 4 oh no, get photo 1 again.
		// if backend has no single photo
		// 1 oh no, backend tells us no there is nothing there,
		// so we stop asking backend, and have to just replace every single
		// one with fallback img stored at front.

	};

	fetchPhotoLocal: () => Promise<any[]> = () => {
		return new Promise((resolve, reject) => {
			this.dataService.getData("statics/data/wallphotos.json").subscribe(
				(next) => {
					// next e.g.
					// {
					// 	"title": "watch_dogs",
					// 	"img": "watch_dogs.jpg"
					// }
					resolve(next);
				}
			);
		});
	};

	getMaster: () => Promise<any[]> = () => {
		return new Promise((resolve, reject) => {
			this.dataService.getData("statics/data/user-response.json").subscribe(
				(next) => {
					// next e.g.
					// {
					// 	"name": "valorad",
					// 	"fullName": "Valorad the Oneiroseeker",
					// 	"descr": "",
					// 	"role": "master",
					// 	"avatar": ""
					// }
					resolve(next);
				},
				(error) => {
					console.error(error);
				}
			);
		});
	}

	getXiaomajias: () => Promise<any[]> = () => {
		return new Promise((resolve, reject) => {
			this.dataService.getData("statics/data/xiaomajia-response.json").subscribe(
				(next) => {
					// next is [{user}{user}]
					resolve(next);
				},
				(error) => {
					console.error(error);
				}
			);
		});
	}

	main = async () => {
		// set themes to blue color
		this.themeService.config.current = "mat-blue-pink";
		// fetch photowall data
		try {
			let photos: any[] = await this.fetchPhotoLocal();
			this.onWallPhotos = photos;
		} catch (error) {
			console.error("Failed to fetch photos on wall");
		}

		// get master and xiaomajia
		try {
			this.master = await this.getMaster();
			this.xiaomajias = await this.getXiaomajias();
		} catch (ex) {
			console.error("Failed to get master or xiaomajia data");
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
	};

	constructor(
		private dataService: DataService,
		public themeService: ThemeService
	) { }
	
	ngOnInit() {

		this.main();
		// fill photowall with dummy
		// for (let i = 0; i < this.photoNum; i++) {
		// 	this.dummyAvt.push({
		// 		title: i,
		// 		img: null
		// 	})
		// }

	}

}