import multer from 'multer';
import path from 'path';

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve('uploads'));
    },
    filename: function (req, file, cb) {
        const time = new Date().getTime();
        cb(null, `${time}_${file.originalname}`);
    }
});