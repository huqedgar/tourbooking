import classNames from 'classnames/bind';
import styles from './Upload.module.scss';

import { useState } from 'react';

import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

const cx = classNames.bind(styles);

const Upload = () => {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState('No selected file');
    return (
        <section>
            <div className={cx('formUpload')} onClick={() => document.querySelector('.input-field').click()}>
                <input
                    type="file"
                    accept="image/*"
                    className="input-field"
                    hidden
                    onChange={({ target: { files } }) => {
                        files[0] && setFileName(files[0].name);
                        if (files) {
                            setImage(URL.createObjectURL(files[0]));
                        }
                    }}
                />
                {image ? (
                    <img src={image} width={150} height={150} alt={fileName} />
                ) : (
                    <>
                        <MdCloudUpload color="#1475cf" size={60} />
                        <p>Browse Files to upload</p>
                    </>
                )}
            </div>
            <div className={cx('uploaded-row')}>
                <AiFillFileImage color="#1475cf" />
                <span className={cx('upload-content')}>
                    {fileName} -
                    <MdDelete
                        onClick={() => {
                            setFileName('No selected File');
                            setImage(null);
                        }}
                    />
                </span>
            </div>
        </section>
    );
};

export default Upload;
