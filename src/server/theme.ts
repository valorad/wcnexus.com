import { Router, Request, Response } from 'express';
import { themes } from './schemas/themes';

const router = Router();

/* GET theme api listing. */
router.get('/', (req: Request, res: Response) => {
  res.send('theme works');
});

// return everything from theme collection
router.get('/all', (req: Request, res: Response) => {
  themes.find().then((result) => {
    res.send(result);
  });
});

// return only theme titleImg, theme name and theme title from theme collection
router.get('/choose', (req: Request, res: Response) => {
  themes.find({}, {"titleImg": 1, "title": 1, "name": 1}).then((result) => {
    res.send(result);
  });
});

// return every attribute of a specific theme.
router.get('/name/:themeName', (req: Request, res: Response) => {
  themes.find({"name": req.params.themeName}).then((result) => {
    res.send(result);
  });
});

export const theme = router;