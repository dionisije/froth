import React from 'react';
import useRequestRest from '../hooks/useRequestRest';
import Album from './Album';

const Albums = () => {
    const {data: albumsData} = useRequestRest();

    return (
        <main>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
                        {
                            albumsData.map(album => (
                                <div className="col" key={album.Catalogue}>
                                    <Album detail={album} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Albums;
