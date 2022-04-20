import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {object} from 'prop-types';

const Album = ({detail}) => {
    const basePath = '/images';

    return (
        <Link href={`/detail/${detail.Catalogue.toLowerCase()}`} passHref>
            <div className="card shadow-sm text-center">
                <div>
                    <Image
                        className="img-thumbnail mx-auto d-block"
                        src={`${basePath}/${detail.Catalogue.toLowerCase()}.jpg`}
                        alt={`${detail.Catalogue}`}
                        layout="responsive"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="card-body">
                    <h4 className="card-text">
                        {detail.Catalogue}
                    </h4>
                </div>
            </div>
        </Link>
    );
};

Album.propTypes = {
    detail: object.isRequired
};

export default Album;
