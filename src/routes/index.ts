import { Router, Response, Request } from 'express';

const router = Router();

router.get('/ping', (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      ping: 'pong'
    });
  } catch (e) {
    return res.status(500).json({
      error: 'internal server error'
    });
  }
});

export default router;
